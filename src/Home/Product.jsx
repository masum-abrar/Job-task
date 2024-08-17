import React from 'react';

export const Product = ({ product }) => {

    const { _id, productName, productImage, description, price, brandName, category, ratings, createdAt } = product;

    return (
        <div className="card bg-base-200 w-full shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={productImage}
                    alt="products"
                    className="rounded-xl w-80 h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
                <div className="card-actions gap-8">
                    <p><span className='font-bold'>Category:</span> {category}</p>
                    <p><span className='font-bold'>Brand:</span> {brandName}</p>
                </div>
                <div className="card-actions gap-8">
                    <p><span className='font-bold'>Price:</span> ${price}</p>
                    <p><span className='font-bold'>Rating:</span> {ratings}</p>
                </div>
                <p><span className='font-bold'>Created At:</span> {new Date(createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};
