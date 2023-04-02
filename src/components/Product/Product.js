import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log('props',props.product)
    const {largeImageURL,tags} = props.product;
    // console.log(largeImageURL);
    return (
        <div className='card'>
            <img src={largeImageURL} alt=''></img>
            <br></br>
            <h3>{tags}</h3>
        </div>
    );
};

export default Product;