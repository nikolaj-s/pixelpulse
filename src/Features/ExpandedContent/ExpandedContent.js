import React from 'react'
import { useSelector } from 'react-redux'
import { selectContentOpen, selectCurrentContent } from './ExpandedContentSlice'

import "./ExpandedContent.css";

export const ExpandedContent = () => {

    const content = useSelector(selectCurrentContent);

    const contentOpen = useSelector(selectContentOpen);

    return (
        <>
        {contentOpen ?
        <div className='expanded-content-container'> 
            <div className='content-wrapper'>
                {content?.type === 'image' ?
                <img src={content?.image} />
                : 
                <iframe src={content?.url} />
                }
            </div>
            <div className='info-wrapper'>

            </div>
        </div>
        : null}
        </>
    )
}
