import React from 'react';
import axios from 'axios';

const ProductList = props =>{
    return(
        <div>
            {props.products.map((product,i)=>{
                return <p key={i}>{product.title}</p>
            })}
        </div>
    )
}

export default ProductList;