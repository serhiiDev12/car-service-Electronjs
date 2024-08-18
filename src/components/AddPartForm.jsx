import React, { useState } from 'react';
import StyledInput from './StyledInput';
import Button from './Button';
import {addProduct} from "../service";

const CarPartForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        brand: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProduct(formData);
            setSuccess('Product added successfully');
            handleClear();
        } catch (err) {
            setError('Failed to add product');
        }
    };

    const handleClear = () => {
        setFormData({
            title: '',
            price: '',
            brand: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex ml-5 flex-col w-full justify-center">
            <h1 className="text-3xl border-b pb-2">Add new part</h1>
            <div>
                <label className="block text-gray-700">Title</label>
                <StyledInput
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter title"
                />
            </div>

            <div>
                <label className="block text-gray-700">Price</label>
                <StyledInput
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                />
            </div>

            <div>
                <label className="block text-gray-700">Brand</label>
                <StyledInput
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Enter brand"
                />
            </div>
            {
                error !== '' &&
                <h1 className="text-red-800">{error}</h1>
            }
            {
                success !== '' &&
                <h1 className="text-green-600">{success}</h1>
            }
            <div className="flex space-x-4">
                <Button onClick={handleSubmit} type="submit" className="bg-green-500 hover:bg-green-600">
                    Create Part
                </Button>
                <Button
                    type="button"
                    onClick={handleClear}
                    className="bg-red-500 hover:bg-red-600"
                >
                    Clear Form
                </Button>
            </div>
        </form>
    );
};

export default CarPartForm;