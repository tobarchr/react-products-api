import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Details = props => {
    const [product,setProduct] = useState({})
    console.log(product)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+ props.id)
            .then (res =>setProduct(res.data.product))
    },[])
    return(
        <div>
            <p> Title: {product ? product.title : ""}</p>
            <p> Description: {product ? product.description :""}</p>
            <p> Price: ${product ? product.price : ""}</p>
        </div>
    )
}

export default Details;