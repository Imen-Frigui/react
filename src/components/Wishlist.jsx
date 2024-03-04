import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    remove,
    decrement
} from '../redux/slices/wishlistSlice.js'
function Wishlist() {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const handleAddItem = (item) => {
        dispatch(increment(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(remove(item));
    };

    const handleDeleteItem = (itemId) => {
        dispatch(decrement(itemId));
    };

    return (
        <div>
            <h2>My Wishlist</h2>
            <ul>
                {wishlistItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => handleAddItem(item)}>+</button>
                        <button onClick={() => handleRemoveItem(item)}>-</button>
                        <button onClick={() => handleDeleteItem(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Wishlist;
