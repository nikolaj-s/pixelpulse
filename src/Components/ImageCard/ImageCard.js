import React from 'react';

import "./ImageCard.css";

export const ImageCard = ({image}) => {


    return (
        <div className='image-card-container'>
            <img src={image} />
        </div>
    )
}
