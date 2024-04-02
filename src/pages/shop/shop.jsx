import React from "react"
import Product from "./Product"
import {PRODUCTS} from "../../data/products"
const Shop = ()=> {
    return (
        <React.Fragment>
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