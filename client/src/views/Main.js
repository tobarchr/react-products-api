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
            navigate("/")}
        )
        .catch(err=> console.log(err))
    }

    const removeProduct = _id => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res=>console.log('User was removed sucessfully'))
            .catch(err=>console.log(err))
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
                    return <p key={i}><a href={`http://localhost:3000/products/${prod._id}`}>{prod.title}</a><button className="btn btn-danger" onClick={()=> removeProduct(prod._id)}>Delete</button>&nbsp;&nbsp;<a href={`http://localhost:3000/products/update/${prod._id}`} className="btn btn-primary">Update</a></p>
                    }
                    ):""
                }
            </div>
        </div>
    )
}

export default Main;