import React from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import "./Results.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchImages, selectResults } from './ResultsSlice';
import { ImageCard } from '../../Components/ImageCard/ImageCard';

export const Results = () => {

    const dispatch = useDispatch();

    const results = useSelector(selectResults);
    
    React.useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('q') && results.length === 0) {
            console.log('fetching')
            dispatch(searchImages());
        } else {
            window.history.replaceState(null, '', '/');
        }

        let new_url = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + urlParams.toString();

        window.history.pushState({}, '', new_url);
    }, [])

    return (
        <div className='results-container'>
            <ResponsiveMasonry style={{width: '100%'}}>

                <Masonry gutter='5px'>
                    {results.map(result => {
                        return <ImageCard image={result.preview} />
                    })}
                </Masonry>

            </ResponsiveMasonry>
        </div>  
    )
}
