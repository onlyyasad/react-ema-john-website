import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cartProducts, setCartProducts] = useState([]);

    const setToCart = (cartData) => {
        let newCartProducts = [...cartProducts, cartData];
        setCartProducts(newCartProducts)
    }

    const totalPrice = cartProducts.reduce((a, b) => a + b.price, 0);
    const shippingCharge = cartProducts.reduce((a, b) => a + b.shipping, 0);
    const tax = parseFloat(((totalPrice + shippingCharge) * 0.1).toFixed(2));
    const grandTotal = totalPrice + shippingCharge + tax;
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-12 mt-4 relative'>
            <div className='col-span-9'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                    {
                        products.map((product) => <Products
                            data={product}
                            key={product.id}
                            setToCart = {setToCart}
                        >
                        </Products>)
                    }
                </div>
            </div>
            <div className='col-span-3 p-4 sticky top-0 h-screen'>
                <div>
                    <h1 className='text-lg font-bold text-center'>Order Summery</h1>
                </div>
                <div className='text-start flex flex-col gap-4 my-8'>
                    <p>Selected Items: <span>{cartProducts.length}</span></p>
                    <p>Total Price: $<span id='total-price'>{totalPrice}</span></p>
                    <p>Total Shipping Charge: $<span id='shipping-charge'>{shippingCharge}</span></p>
                    <p>Tax: $ <span id='tax'>{tax}</span> </p>
                    <p className='text-lg font-semibold'>Grand Total: {grandTotal}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <button className='bg-red-500 text-white font-semibold p-2 rounded-md'>Clear Cart</button>
                    <button className='bg-orange-500 text-white font-semibold p-2 rounded-md'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;