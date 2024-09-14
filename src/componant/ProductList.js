import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
    const url = 'https://fakestoreapi.com/products'  ;
    const [products , setProduct] = useState([]) ;   
    useEffect(() => 
    {
        fetch(url).then((res)=> res.json()).then((data)=> setProduct(data)) ; 
    }
     , []) ; 
    return (
        <>
            <h1 className="text-center">Our Products</h1>
            <div className="row">
                {products.map((props)=> 
                {   

                    return(
                        <div className="col-3" key={props.id}> 
                        <Product  product = {props} showButton = {true} />
                         
                        </div>
                        ) ; 
                })}
               
            </div>
        </>
    );
}

export default ProductList;
