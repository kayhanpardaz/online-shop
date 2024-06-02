import { useState, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import './product.css'
const Product = (props)=> {
    const {id, productName, productImage, price} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

    const isInCart = cartItems?.some((item)=> item.id === id)
    return (
        <div className="col-md-2 card-data" >
            <img src={productImage} className="w-100"/>
            <h5>{productName}</h5>
            <p>price: {price}$</p>
            <button className="btn btn-info btn-sm" onClick={()=> addToCart(id)}>+</button>
            <span className="mx-1">{cartItems?.filter((row)=> row.id === id)[0]?.count}</span>
            {isInCart && <button className="btn btn-info btn-sm" onClick={()=> removeFromCart(id)}>-</button>}
        </div>
    );
}
export default Product;