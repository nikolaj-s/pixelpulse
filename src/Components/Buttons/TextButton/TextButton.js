import React from 'react';

import "./TextButton.css";

export const TextButton = ({name = "", action = () => {}}) => {

    return (
        <button className='text-button' onClick={action}>
            <p>{name}</p>
        </button>
    )
}

