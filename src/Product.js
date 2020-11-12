import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating, img}) {

    const[{basket}, dispatch] = useStateValue();
    const addToBasket = () =>{
        //adding item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title:title,
                img: img,
                price:price,
                rating:rating
            }
        })
    };
    return(

        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                {/* product details*/}
                <p className="product__">
                    <small>$</small>
                    <strong>{price}</strong>

                </p>
                <div className="product_ratimg">
                    {
                        Array(rating).fill().map((_) => (<p>⭐</p>))
                    }

                </div>
            </div>
            <img src={img} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
