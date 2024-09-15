import React from 'react'
import { SearchIcon } from '../Icons/SearchIcon/SearchIcon'

import "./TextInput.css";

export const TextInput = ({value, action = () => {}, enter = () => {}, placeholder = "SEARCH"}) => {

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            enter();
        }
    }

    return (
        <div className='text-input'>
            <input onKeyUp={handleEnter} value={value} onChange={(e) => {action(e.target.value)}} type='text' placeholder={placeholder} />
            <SearchIcon />
        </div>
    )
}
