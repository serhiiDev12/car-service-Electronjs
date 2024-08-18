import * as React from 'react';

export default function Navigation({changeScreen}) {
    return (
        <div className="flex flex-col h-screen border-r">
            <h1 className="text-2xl pb-2 border-b">Car Parts App</h1>
            <button
                onClick={() => changeScreen(1)}
                className="p-3 border-t-2 border-b-2 border-white cursor-pointer flex border transition-300 hover:bg-green-100 bg-gray-200 justify-center items-center">
                <h2>All Parts</h2>
            </button>
            <div
                onClick={() => changeScreen(2)}
                className="p-3 border-t-2 border-b-2 border-white cursor-pointer flex border transition-300 hover:bg-green-100 bg-gray-200 justify-center items-center">
                <h2>Add Part</h2>
            </div>
        </div>
    )
}