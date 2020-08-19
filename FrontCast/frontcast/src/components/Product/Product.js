import React from 'react'
import './Product.css'

export const Product = (props) => {   
    return (
        <div className="product">
            <p>Product Name: {props.title}</p>
            <p onClick={props.click}>Product Price: {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} />
        </div>
    )
}

export default Product