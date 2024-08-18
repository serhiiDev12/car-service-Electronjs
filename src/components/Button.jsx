import * as React from 'react';

export default function Button(props) {
    return (
        <button
            {...props}
            className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${props.className}`}
        >
            {props.children}
        </button>
    );
};
