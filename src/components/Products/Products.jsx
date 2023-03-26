import React from 'react';

const Products = (props) => {

    console.log(props.data)
    const { img, name, price, seller, ratings } = props.data;
    return (
        <>
            <div className="card p-2 w-full bg-base-100 border">
                <figure className="px-2 pt-2">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Menufacturer: {seller}</p>
                    <p>Rating: {ratings} Stars</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;