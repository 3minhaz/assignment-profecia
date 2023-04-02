import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const {user,logout} = useAuth();
    const [products,setProducts] = useState([]);    
    const [page,setPages] = useState(1);
    const[inputValue,setInputValue] =useState('');
    const [query, setQuery] = useState('');

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=34952212-633fffe304f7cec192af23f70&q=${inputValue}&page=${page}&per_page=10&min_width=200`)  
        // fetch(`https://pixabay.com/api/?key=34952212-633fffe304f7cec192af23f70&q=flower&page=${page}&per_page=10&min_width=200`)  
            .then(res => res.json())
            .then(data=> {
                setProducts([...products,...data.hits]);
                // setDisplayProducts(data.hits)
            })
    },[page,query,inputValue])
    // console.log(products);

    const handleSearch = () => {        
        setQuery(inputValue.toLowerCase());   
        const inputField = document.getElementById('input-field') ;        ;
        inputField.value ='';        
        setProducts([]);        
    }


    const increasePageNumber = () => {
        const increment = page +1;
        setPages(increment)
    }
    return (
    <div>
            <div className='nav'>            
            {user.email && <span>Hello: {user.displayName} </span>}
            {user.email ? <button onClick={logout}>Logout</button> : ''}            
            </div>        
        <div className='search-box'>
            <input id='input-field' className='input-field' type='text' placeholder='Search your items'  
            onBlur={(e) => setInputValue(e.target.value)}
                />
            <button onClick={handleSearch} className='search-button'>search</button> 
        </div> 

        {
            inputValue ? <h3 className='result-found'>{products.length} product found for '{inputValue}'</h3> : ''
        }
         
        <div className='products'>
            {products.length === 0 ? <h3>Not found product</h3> : 
            products.map(product => 
                <Product 
                key= {product.id}
                product={product}
                ></Product>
            ) 
            }
           
        </div>
        <div className='btn-container'>
        {
            products.length > 0 ? <button onClick={increasePageNumber}
            className='load-more'
            >load more</button> : ''
        }
        </div>
    </div>
    );
};

export default Products;