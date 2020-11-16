import React, { useState } from 'react'

const ProductForm = (props) => {
    return (
        <div>
            <form onSubmit= {props.onSubmitHandler}>
                <p>
                    <label>Title:</label><br/>
                    <input type="text" className = "form-control" name = "title" onChange = {props.onChangeHandler} value={props.form.title}/>
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" className = "form-control" name = "description" onChange = {props.onChangeHandler} value={props.form.description}/>
                </p>
                <p>
                    <label>Price:</label><br/>
                    <input type="text" className = "form-control" name = "price" onChange = {props.onChangeHandler} value={props.form.price}/>
                </p>
                <input type="submit" value="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default ProductForm;

