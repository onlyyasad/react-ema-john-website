import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-9'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        products.map((product) => <Products data={product} key={product.id}></Products>)
                    }
                </div>
            </div>
            <div className='col-span-3'>
                This is Cart Area
            </div>
        </div>
    );
};

export default Shop;