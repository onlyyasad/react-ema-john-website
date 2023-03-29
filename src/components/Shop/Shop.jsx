import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { getLocalStorageData, setToLocalStorage } from '../fakeDb/fakeDb';
import Products from '../Products/Products';


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedData = getLocalStorageData();
        const savedCart = [];
        for(const id in storedData){
            let savedProduct = products.find(pd => pd.id === id)
            if(savedProduct){
                const quantity = storedData[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const setToCart = (product) => {
        let newCart = [];
        // console.log(cart)
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== exist.id);
            newCart = [...remaining, exist]
        }
        
        setCart(newCart);
        setToLocalStorage(product.id);
    }

    
    return (
        <div className='grid grid-cols-12 mt-4 relative'>
            <div className='col-span-9'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                    {
                        products.map((product) => <Products data={product} key={product.id} setToCart={setToCart}></Products>)
                    }
                </div>
            </div>
            <div className='col-span-3 bg-orange-300 p-4 sticky top-0 h-screen'>
                <Cart cart ={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;