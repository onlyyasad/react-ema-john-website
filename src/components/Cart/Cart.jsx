import React from 'react';

const Cart = ({cart}) => {
    let quantity = 0;
    let totalPrice = 0;
    let shippingCharge = 0;
    for(const product of cart){
        
        quantity += product.quantity;
        totalPrice += product.price * product.quantity;
        shippingCharge += product.shipping * product.quantity;
    }
    const tax = totalPrice * 0.1;
    const grandTotal = totalPrice + shippingCharge + tax;

    return (
        <>
            <div>
                <h1 className='text-lg font-bold text-center'>Order Summery</h1>
            </div>
            <div className='text-start flex flex-col gap-4 my-8'>
                <p>Selected Items: <span>{quantity}</span></p>
                <p>Total Price: $<span id='total-price'>{totalPrice}</span></p>
                <p>Total Shipping Charge: $<span id='shipping-charge'>{shippingCharge}</span></p>
                <p>Tax: $ <span id='tax'>{tax.toFixed(2)}</span> </p>
                <p className='text-lg font-semibold'>Grand Total: {grandTotal.toFixed(2)}</p>
            </div>
            <div className='flex flex-col gap-4'>
                <button className='bg-red-500 text-white font-semibold p-2 rounded-md'>Clear Cart</button>
                <button className='bg-orange-500 text-white font-semibold p-2 rounded-md'>Review Order</button>
            </div>
        </>
    );
};

export default Cart;