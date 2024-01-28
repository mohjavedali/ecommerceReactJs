import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, CartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitem'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (CartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitem-format cartitem-format-main">
                            <img src={e.image} className='carticon-product-icon' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem-quantity'>{CartItems[e.id]}</button>
                            <p>{e.new_price * CartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                    </div>
                }
            })}
        </div>
    )
}

export default CartItems