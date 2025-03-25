import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import ProductItem from "./ProductItem.jsx";
import Title from "../components/Title.jsx"

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {

        setLatestProducts(products.slice(0, 5));
    }, [products]); // Added products dependency to prevent stale state

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
            <Title text1="Latest" text2="Collection" />

            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((item, index) => (
                    
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />

                   
                   /*
                    <ProductItem 
                    key={index} 
                    _id={item.id} 
                    brand={item.brand} 
                    model={item.model} 
                    price={item.price} 
                    variants={item.variants} 

                />
                */
             
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;