import React, {useState} from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';

const NewProduct = props => {
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
        .then (res => console.log(res))
        .catch(err=> console.log(err))

    }
    return(
        <div>
            <ProductForm form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

export default NewProduct;