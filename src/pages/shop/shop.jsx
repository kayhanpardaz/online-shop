import React from "react"
import Product from "./Product"
import {PRODUCTS} from "../../data/products"
import { Slider } from "../../components/slider/slider"
const Shop = ()=> {
    return (
        <React.Fragment>
            <Slider/>
            <h1>Shop</h1>
            <div className="row">
                {PRODUCTS.map((productData)=> {
                    return <Product key={productData.id} data={productData}/>
                })}
            </div>
        </React.Fragment>
    );
}
export default Shop;