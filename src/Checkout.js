import React from 'react'
import {useStateValue} from './StateProvider';
import './Checkout'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase4/3day/Phase4_Unrec_PC_Hero_1x._CB416859894_.jpg" alt="add on amazone"></img>
            {basket?.length == 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2>Your Shopping Basket</h2>
                </div>
            )
            }

            
        </div>
    )
}

export default Checkout
