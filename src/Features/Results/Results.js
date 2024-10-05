import React from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import "./Results.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchImages, selectErrorState, selectResults } from './ResultsSlice';
import { selectCurrentExplicitContentOption } from '../Navigation/NavigationSlice';
import { Card } from '../../Components/Card/Card';
import { Error } from '../Error/Error';

export const Results = () => {

    const dispatch = useDispatch();

    const error = useSelector(selectErrorState);

    const results = useSelector(selectResults);

    const explicitContentOption = useSelector(selectCurrentExplicitContentOption);
    
    React.useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('q') && results.length === 0) {
            
            dispatch(searchImages());
        }

    }, [])

    return (
        <div className='results-container'>
            {error ?
            <Error />
            :
            <ResponsiveMasonry columnsCountBreakPoints={{400: 1, 600: 2, 800: 3}} style={{width: '100%'}}>

                <Masonry gutter='5px'>
                    {results.map(result => {
                        return  <Card result={result} explicitContentOption={explicitContentOption} />
                        
                    })}
                </Masonry>

            </ResponsiveMasonry>
            }
        </div>  
    )
}
