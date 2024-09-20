import React from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import "./Results.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchImages, selectResults } from './ResultsSlice';
import { ImageCard } from '../../Components/ImageCard/ImageCard';
import { VideoCard } from '../../Components/VideoCard/VideoCard';

export const Results = () => {

    const dispatch = useDispatch();

    const results = useSelector(selectResults);
    
    React.useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('q') && results.length === 0) {
            console.log('fetching')
            dispatch(searchImages());
        }

    }, [])

    return (
        <div className='results-container'>
            <ResponsiveMasonry style={{width: '100%'}}>

                <Masonry gutter='5px'>
                    {results.map(result => {
                        return result.type === 'image' ?
                        <ImageCard image={result.preview} />
                        :
                        <VideoCard data={result} />
                    })}
                </Masonry>

            </ResponsiveMasonry>
        </div>  
    )
}
