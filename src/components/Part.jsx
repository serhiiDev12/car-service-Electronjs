import React from 'react';
import Button from './Button'; // Assuming Button is in the same directory

export default function Part({ productId, title, price, brand, onRemove }) {
    return (
        <div className="bg-white shadow-lg w-full h-fit rounded-lg p-8 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600">Price: ${price}</p>
            <p className="text-gray-600">Brand: {brand}</p>
        </div>
    );
};
