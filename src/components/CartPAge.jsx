import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    const getCartItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsm-contest.onrender.com/cart/${userInfo?.email}`, {
          method: 'GET',
        });
        const itemsJson = await response.json();
        setCartItems(itemsJson.cartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    getCartItems();
  }, [userInfo?.email, cartItems.length]);

  const removeItemFromCart = async (productId) => {
    try {
      const response = await fetch('https://jsm-contest.onrender.com/cart/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userInfo?.email, productId }),
      });
      if (response.ok) {
        const data = await response.json();
        setCartItems(data.cartItems);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const CartItem = ({ item }) => (
    <div className="flex flex-col border-b border-gray-200 py-4 last:border-b-0">
      <div className="flex items-start">
        <img
          src={item.productId?.imageUrl}
          alt={item.productId?.name}
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div className="flex-grow">
          <h2 className="text-lg font-semibold">{item.productId?.name}</h2>
          <p className="text-gray-600">Quantity: {item?.quantity}</p>
          <p className="text-gray-600">Price: ${item.productId?.price?.toFixed(2)}</p>
          <p className="text-gray-600">Total: ${(item.productId?.price * item?.quantity)?.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => removeItemFromCart(item.productId?._id)}
        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out self-start"
      >
        Remove
      </button>
    </div>
  );

  const total = cartItems?.reduce((sum, item) => sum + item.productId?.price * item?.quantity, 0);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : cartItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-4">
          {cartItems.map(item => (
            <CartItem key={item?._id} item={item} />
          ))}
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
