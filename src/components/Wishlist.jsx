import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    remove,
    decrement
} from '../redux/slices/wishlistSlice.js'
function Wishlist() {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.wishlist);

    const total = wishlistItems.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity);
    }, 0);

    return (
        <div className="wishlist-container">
            <h2>WISHLIST</h2>
            {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                    <img src={item.image} alt={item.name}/>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.price} DT</p>
                        <button onClick={() => dispatch(remove(item.id))}>-</button>
                        <span> {item.quantity} </span>
                        <button onClick={() => dispatch(increment(item))}>+</button>
                        <p>Total Price: {item.price * item.quantity}DT</p>
                        <button onClick={() => dispatch(decrement(item.id))}>x</button>
                    </div>
                </div>
            ))}
            <div className="total-price">
                <strong>Total: {total} DT</strong>
            </div>
        </div>
    );
}

export default Wishlist;
