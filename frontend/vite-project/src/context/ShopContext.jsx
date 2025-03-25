
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {


    const currency = "$";
    const delivery_fee = 10;
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId,size)=> {

        if(!size){
            toast.error('Select Product Size')
            return;
        }
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId]= {};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData)
        toast.success('Product added successfully!');
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items])
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];
                    }
            }catch(error){

            }
        }
        return totalCount

    }

    const updateQuantity = async (itemId,size,quenty)=>{
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        setCartItems(cartData);

    }

    const getCartAmount = async=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product.id===items);
            for(const item in cartItems[items]){
                try{
                        if(cartItems[items][item]>0){

                           totalAmount+= itemInfo.price*cartItems[items][item]
                        }
                }catch(error){

                }
            }
        }
        return totalAmount;
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,addToCart,
        getCartCount,updateQuantity,getCartAmount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};
