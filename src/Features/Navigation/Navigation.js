import React from 'react'

import "./Navigation.css";
import { TextInput } from '../../Components/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuery, setQuery } from './NavigationSlice';
import { searchImages } from '../Results/ResultsSlice';

export const Navigation = () => {

    const dispatch = useDispatch();

    const query = useSelector(selectQuery);

    const handleTextInput = (value) => {

        dispatch(setQuery(value));
    
    }

    const search = () => {
        if (query.length === 0) return;

        dispatch(searchImages());
    }

    return (
        <div className='navigation-wrapper'
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <nav
            style={{
                maxWidth: 800,
    
            }}
            >
                <TextInput enter={search} action={handleTextInput} value={query} /> 
            </nav>
        </div>
    )
}
