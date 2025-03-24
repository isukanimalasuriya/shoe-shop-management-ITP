import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  // const [sizeId, setSizeId] = useState(""); // Store size ID
  const [sizesArray, setSizesArray] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState(""); // Track selected variant ID
  const [selectedSizeId, setSelectedSizeId] = useState(""); // Track selected variant ID
  const [selectedSize, setSelectedSize] = useState(0); // Track selected variant ID
  const [selectedColor, setSelectedColor] = useState(""); // Track selected variant ID

  const fetchProductData = async () => {

    axios
      .get(`http://localhost:3000/api/product/${productId}`)
      .then((res) => {
        console.log("res.data is =====> ", res.data);
        setProductData(res.data);
        setImage(res.data.variants[0].imageUrl);
        setSizesArray(res.data.variants[0].sizes);
        setSelectedVariantId(res.data.variants[0]._id); // Set the initial variant ID
        setSelectedColor(res.data.variants[0].color)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  const onClickImage = (index) => {
    setImage(productData.variants[index].imageUrl);
    setSizesArray(productData.variants[index].sizes);
    setSelectedVariantId(productData.variants[index]._id);
    setSelectedColor(productData.variants[index].color) // Update the variant ID based on clicked image
  };

  const onClickSize = (item) => {
    setSelectedSize(item.size);
    setSelectedSizeId(item._id);
  }

  const handleAddToCart = () => {
    if (!selectedSizeId) {
      toast.error("Please select a size", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
  
    const cartItem = {
      userId: "user1234",
      items: [{
        brand: {
          brandId: productId,
          brandName: productData.brand,
          modelName: productData.model
        },
        color: {
          colorId: selectedVariantId,
          colorName: selectedColor
        },
        size: {
          sizeId: selectedSizeId,
          size: selectedSize
        },
        quantity: 1,
        imageUrl: image,
        price: productData.price
      }]
    };
  
    axios.post(`http://localhost:3000/api/cart`, cartItem)
      .then((res) => {
        console.log(res.data);

        if(res.status>=200 && res.status < 300){
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 3000,
          });
        }

        
      })
      .catch((err) => {
        console.error(err);
        const errorMessage = err.response?.data?.message || "Failed to add product to cart";
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full gap-2">
            {productData.variants.map((item, index) => (
              <img
                onClick={() => onClickImage(index)}
                src={item.imageUrl}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.model}</h1>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {sizesArray?.map((item, index) => (
                <button
                  onClick={() => onClickSize(item)} // Store size ID
                  className={`py-2 px-4 bg-gray-100 border ${
                    item._id === selectedSizeId ? "border-orange-500" : "border-gray-300"
                  } cursor-pointer`}
                  key={item._id}
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart} // Use the updated handleAddToCart function
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Reviews</b>
          <p className="px-5 py-3 text-sm"></p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p></p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
