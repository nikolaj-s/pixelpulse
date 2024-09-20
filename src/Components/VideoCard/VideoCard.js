import React from 'react';

import "./VideoCard.css";
import { PlayIcon } from '../Icons/PlayIcon/PlayIcon';

export const VideoCard = ({data = {}}) => {

    const [hover, toggleHover] = React.useState(false);

    const onMouseEnter = () => {
        if (data.video_preview) {
            toggleHover(true);
        }
    }

    const onMouseLeave = () => {
        toggleHover(false);
    }

    return (
        <div 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className='video-card'>
            <img src={data.thumbnail} />
            {hover && data.video_preview ?
            <video controls={false} src={data.video_preview} autoPlay muted />
            : null}
            {hover ? null :
            <div className='video-card-overlay'>
                <PlayIcon />
                <p>{data.duration}</p>
            </div>
            }
        </div>
    )
}
