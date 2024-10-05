import React from 'react';

import "./ImageCard.css";
import { ErrorIcon } from '../Icons/ErrorIcon/ErrorIcon';

export const ImageCard = ({image, fallback}) => {

    const [error, toggleError] = React.useState(false);

    const handleError = (e) => {
        if (error) return;

        toggleError(true);
    }

    return (
        <div className='image-card-container'>
            {error ?
            <div className='image-error-display'>
                <ErrorIcon />
            </div>
            :
            <img onError={handleError} src={image} />}
        </div>
    )
}
