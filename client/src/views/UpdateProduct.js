import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import {navigate} from '@reach/router';

const UpdateProduct = props =>{

    const [error,setError] = useState([]);
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: 0
    });

    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setForm(res.data.product))
    },[]);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, form)
        .then (res => {
            if(res.data.error){
                setError(res.data.error.erros)}
            else{
                    navigate('/')
                }
            })
    }

    return(
        <div>
            <h1>Update Form!</h1>
            <ProductForm onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler}/>
        </div>
    )
}

export default UpdateProduct;