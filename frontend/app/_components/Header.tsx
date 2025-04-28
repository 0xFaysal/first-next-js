"use client";
// import {RootState} from "@/lib/store";
import Link from "next/link";
import React from "react";
// import {useSelector} from "react-redux";
// import {useAppSelector} from "@/lib/hooks";

export default function Header() {
    // const count = useSelector((state: RootState) => state.ThisIsCounter.value);
    // const count = useAppSelector((state) => state.ThisIsCounter.value);

    return (
        <nav className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <div className='text-2xl font-bold'>My App</div>
            <div>{/* <h2>Total Count:{count}</h2> */}</div>
            <ul className='flex space-x-4'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/counter'>Counter</Link>
                </li>
                <li>
                    <Link href='/products'>Products</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
            <div className='flex items-center space-x-4'>
                <a href='/login' className='px-4 py-2 bg-blue-500 rounded'>
                    Login
                </a>
                <a href='/signup' className='px-4 py-2 bg-green-500 rounded'>
                    Sign Up
                </a>
            </div>
        </nav>
    );
}
