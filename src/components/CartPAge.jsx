import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        const getCartItems = async () => {
            try {
                const response = await fetch(`https://jsm-contest.onrender.com/cart/${userInfo?.email}`, {
                    method: 'GET',
                });
                const itemsJson = await response.json();
                console.log('API Response:', itemsJson);
                setCartItems(itemsJson.cartItems);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        getCartItems();
    }, [userInfo?.email, cartItems]);

    const removeItemFromCart = async (productId) => {
        try {
            const response = await fetch('https://jsm-contest.onrender.com/cart/remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userInfo?.email, productId }),
            });
            const data = await response.json();
            console.log('Remove Item Response:', data);
            // Update the cart items after deletion
            if (response.ok) {
                setCartItems(data.cartItems);
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>
            {cartItems.length > 0 ? (
                <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-300">
                    {cartItems.map(item => (
                        <li key={item._id} className="flex items-center justify-between p-4 hover:bg-gray-100 transition duration-200">
                            {item.productId ? (
                                <>
                                    <div className="flex items-center">
                                        <img
                                            src={item.productId.imageUrl}
                                            alt={item.productId.name}
                                            className="w-20 h-20 object-cover rounded-md mr-4 shadow-sm"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.productId.name}</h2>
                                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold text-lg text-green-600">${(item.productId.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        onClick={() => removeItemFromCart(item.productId._id)}
                                        className="text-red-600 hover:text-red-800 font-semibold ml-4"
                                    >
                                        Remove
                                    </button>
                                </>
                            ) : (
                                <span className="text-red-500 font-semibold">Product not found</span>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-lg text-center mt-4">Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;
