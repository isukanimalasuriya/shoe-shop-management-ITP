
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className ='hover:scale-110 transition ease-in-out' src={image} alt="This is a image" />

        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      
    </Link>
  )
}

export default ProductItem



/*

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ _id, brand, model, price, variants = [] }) => {
    const { currency } = useContext(ShopContext);

    // Ensure variants is an array and has at least one element
    //const imageUrl = variants.length > 0 && variants[0].imageURL ? variants[0].imageURL : 'default-image-url.jpg';
    const imageUrl = variants.length > 0 ? variants[0].imageURL : 'default-image-url.jpg';

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${_id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={imageUrl} alt={`${brand} ${model}`} />
            </div>
            <p className='pt-3 pb-1 text-sm font-medium'>{brand} - {model}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;

*/
