import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/Product";
import { Slider } from "../../components/slider/slider";
const Cart = ()=> {
    const {cartItems} = useContext(ShopContext)
    return(
        <React.Fragment>
            <Slider/>
        <h1>Cart</h1>
        <div className="row">
            {PRODUCTS.map((p)=> {
                if (cartItems.some((i)=> i.id === p.id && i.count > 0)) {
                    return <Product data={p}></Product>
                }
            })}
        </div>
        </React.Fragment>
    );
}
export default Cart;