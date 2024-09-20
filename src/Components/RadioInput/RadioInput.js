import React from 'react';

import "./RadioInput.css";

export const RadioInput = ({options = [], selectedOption = "", action = () => {}, selector = ""}) => {

    const handleAction = (option) => {
        action(selector, option);
    }

    return (
        <div className='radio-input-container'>
            {options.map(option => {
                return (
                    <div onClick={() => {handleAction(option)}} className={`radio-input-selector ${option === selectedOption ? 'active-item' : ''}`}>
                        <p>{option}</p>
                    </div>
                )
            })}
        </div>
    )
}


