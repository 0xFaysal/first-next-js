"use client";
import {useRouter} from "next/navigation";
import React from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
};

const products: Product[] = [
    {
        id: 1,
        name: "Mango Rupali",
        price: 100,
    },
    {
        id: 2,
        name: "Mango Himsagar",
        price: 200,
    },
    {
        id: 3,
        name: "Mango Langra",
        price: 300,
    },
    {
        id: 4,
        name: "Mango Dasheri",
        price: 400,
    },
    {
        id: 5,
        name: "Mango Anwar Ratol",
        price: 500,
    },
    {
        id: 6,
        name: "Mango Sindhuri",
        price: 600,
    },
    {
        id: 7,
        name: "Mango Baganapalli",
        price: 700,
    },
    {
        id: 8,
        name: "Mango Alphonso",
        price: 800,
    },
    {
        id: 9,
        name: "Mango Kesar",
        price: 900,
    },
];

function ProductLists() {
    const router = useRouter();

    const handleClick = (productId: number) => {
        console.log("Product ID:", productId);

        router.push(`/products/${productId}`);
    };

    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-4xl font-semibold'>Product Lists</h1>
                <p className='text-2xl'>List of Products</p>
                <div className='flex flex-wrap items-center justify-center gap-4 mt-4  text-lg font-medium text-black'>
                    {/* Product list items will go here */}
                    {products.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => handleClick(product.id)}
                            className='p-4 border rounded shadow-md bg-amber-600 text-white hover:bg-amber-700 transition duration-300 ease-in-out transform hover:scale-105'
                        >
                            <h2 className='text-xl font-bold'>
                                {product.name}
                            </h2>
                            <p className='text-lg'>Price: ${product.price}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductLists;
