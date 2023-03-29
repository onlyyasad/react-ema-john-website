import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../fakeDb/fakeDb';
import Products from '../Products/Products';

const Shop = () => {
    const [productsData, setProductsData] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProductsData(data))
    }, [])

    useEffect(() => {
        const newCart = [];
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const storedProduct = productsData.find(pd => pd.id === id);
            if (storedProduct) {
                const quantity = storedCart[id];
                storedProduct.quantity = quantity;
                newCart.push(storedProduct);
            }
        }
        setCart(newCart);
    }, [productsData])

    const handleAddToCart = (product) => {
        let newCart = [];
        const existing = cart.find(pd => pd.id === product.id)
        if(!existing){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            existing.quantity = existing.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, existing]
        }
        
        setCart(newCart);
        addToDb(product.id)
    }



    return (
        <div className='grid grid-cols-12 mt-4 relative'>
            <div className='col-span-9'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                    {
                        productsData.map(product => <Products product={product} key={product.id} handleAddToCart={handleAddToCart}></Products>)
                    }
                </div>
            </div>
            <div className='col-span-3 bg-orange-300 p-4 sticky top-0 h-screen'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;