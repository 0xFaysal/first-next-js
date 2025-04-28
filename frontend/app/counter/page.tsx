"use client";

import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "@/lib/store";
// import Button from "../components/Button";
// import {decrement, increment} from "@/lib/features/counterSlice";

function Counter() {
    // const count = useSelector((state: RootState) => state.);
    // console.log(count);
    // console.log(count);
    // const dispatch = useDispatch();

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-semibold'>Counter</h1>
            {/* <p className='text-2xl'>{count}</p> */}
            <div className='flex gap-4 mt-4 *:bg-purple-500 text-lg font-medium text-black *:px-4 *:py-2 *:rounded-xl'>
                {/* <button onClick={() => dispatch(increment())}>Increase</button> */}
                {/* <button onClick={() => dispatch(decrement())}>Decrease</button> */}
            </div>
        </div>
    );
}

export default Counter;
