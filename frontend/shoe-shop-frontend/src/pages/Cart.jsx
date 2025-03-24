import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from "../components/Title.jsx";
//import CartTotal from '../components/CartTotal.jsx';
import { MdDelete } from "react-icons/md";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import axios from 'axios';

const Cart = () => {
    const { currency } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalprice,setTotal]= useState(0)

    const userId = "user1234"
    const DELIVERY_FEE = 2000;

    useEffect(() => {
        // const userId = "user122"
        axios.get(`http://localhost:3000/api/cart/${userId}`)
        .then((res) => {
            console.log('Cart data:', res.data); // Debugging console log
            setCartData(res.data);
            // setCartData(res.data.items || []); // Assuming `items` contains cart products
        })
        .catch((err) => {
            console.error("Error fetching cart:", err);
        });
    }, []);

    const handleQuantityChange = (e, index) => {
        updateQuantity(index, e.target.value)
    }

    const updateQuantity = (index, newQuantity) => {

        const itemToUpdate ={
            userId: userId,
            item:{
                brand: cartData.items[index].brand,
                color: cartData.items[index].color,
                size: cartData.items[index].size,
                price: cartData.items[index].price,
                quantity: newQuantity
            }
        }
        axios.put(`http://localhost:3000/api/cart/${itemToUpdate.userId}`, itemToUpdate)
        .then((res) => {
            setCartData(res.data.updatedCart);
        }).catch((err) => {
            console.error(err);
        })
    }

    const handleDelete = (index, item) => {
        // const userId = "user123"
        const itemToDelete = {
            brandId: item.brand.brandId,
            colorId: item.color.colorId,
            sizeId: item.size.sizeId
        }

        axios.delete(`http://localhost:3000/api/cart/${userId}`, {
            data: itemToDelete
        })
        .then((res) => {
            console.log(res.data);
            setCartData(res.data.cart)
        }).catch((err) => {
            console.error(err);
        })
    }



    useEffect(() => {
        calculateTotal();
    }, [cartData]);
    
    const calculateTotal = () => {
        if (!cartData.items || cartData.items.length === 0) {
            setTotal(0);  
            return;
        }
    
        let total = cartData.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    
        setTotal(total+DELIVERY_FEE);
    };
    return (
        <div className='border-t pt-14'>
            <div className='tex-2xl mb-3'>
                <Title text1="YOUR" text2="CART" />
            </div>
            <div>
                {cartData.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    cartData.items.map((item, index) => {
                        // const productData = products.find((product) => String(product.id) === String(item.productId));

                        // if (!productData) return null; // Prevent rendering if productData is missing
                        console.log('cart is ====> ', cartData)

                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20' src={item.imageUrl} alt="Product" />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>{item.brand.modelName}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>{currency}{item.price}</p>
                                            <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <HiOutlineMinusCircle className='w-5 mr-4 sm:w-5 cursor-pointer' onClick={() => updateQuantity(index, item.quantity - 1)}/>
                                    <input className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" value={item.quantity}  onChange={(e) => {
                                        handleQuantityChange(e, index)}
                                    } />
                                    <HiOutlinePlusCircle className='w-5 mr-4 sm:w-5 cursor-pointer' onClick={() => updateQuantity(index, item.quantity + 1)}/>
                                </div>
                                <MdDelete className='w-5 mr-4 sm:w-5 cursor-pointer' onClick={() => handleDelete(index, item)}/>
                            </div>
                        );
                    })
                )}
            </div>


            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{totalprice > 0 ? totalprice - DELIVERY_FEE : 0}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency}{totalprice > 0 ? DELIVERY_FEE : 2000}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{totalprice}</b>
            </div>

      </div>
    </div>
                    

                </div>
            </div>

        </div>
    );
};

export default Cart;


