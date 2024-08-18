import React, {useEffect, useState} from 'react';
import Part from '../components/Part';
import StyledInput from "../components/StyledInput";
import {fetchProducts} from "../service";

export default function ProductCardList({ onRemove }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getParts();
    }, [onRemove]);

    const getParts = async (searchQuery = "") => {
            const products = await fetchProducts(searchQuery);
            console.log(products)
            setProducts(products);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getParts(searchQuery);
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchQuery]);

    const changeSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className="flex flex-col w-full lg:w-1/2 flex-wrap gap-3 p-6">
            <h1 className="text-2xl border-b pb-2 w-full">Car parts</h1>
            <StyledInput placeholder="Search" onChange={changeSearchQuery} />
            {products && products.map((product, index) => (
                <Part
                    key={index}
                    productId={product.id}
                    title={product.title}
                    price={product.price}
                    brand={product.brand}
                    onRemove={() => onRemove(product.id)} // Passing index for removal
                />
            ))}
        </div>
    )
};