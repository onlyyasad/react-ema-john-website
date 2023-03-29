import React from 'react';

const Products = ({product , handleAddToCart}) => {
    const {img,name,price, seller, ratings} = product;
    return (
        <>
            <div className="card p-0 w-full bg-base-100 border">
                <figure className="px-2 pt-2">
                    <img src={img} alt="image" className="rounded-xl" />
                </figure>
                <div className="card-body p-3 items-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold'>Price: ${price}</p>
                    <div className='text-sm'>
                        <p>Manufacturer: {seller}</p>
                        <p>Rating: {ratings} Stars</p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(product)} className="bg-orange-300 w-full py-2 hover:bg-orange-400 rounded-b-lg font-bold">Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Products;