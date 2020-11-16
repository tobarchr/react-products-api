import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import {navigate} from '@reach/router';

const Main = props => {

    const[allProducts,setAllProducts] =useState();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>setAllProducts(res.data.products))
    })
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: 0
    })

    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", form)
        .then (res => {console.log(res);
            navigate('/')}
        )
        .catch(err=> console.log(err))
    }
    return(
        <div>
            <div>
            <ProductForm form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
            </div>
            <hr></hr>
            <div>
                <h3>All Products</h3>
                {
                    allProducts ? 
                    allProducts.map((prod,i)=>{
                    return <a href={`http://localhost:3000/products/${prod._id}`} key={i}><p>{prod.title}</p></a>
                    }
                    ):""
                }
            </div>
        </div>
    )
}

export default Main;