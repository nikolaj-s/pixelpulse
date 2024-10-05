import React from 'react'

import { SensitiveContent } from '../SensitiveContent/SensitiveContent'
import { ImageCard } from '../ImageCard/ImageCard'
import { VideoCard } from '../VideoCard/VideoCard'
import { Link } from '../Link/Link';

import "./Card.css";

export const Card = ({result, explicitContentOption}) => {
    return (
        <a target='_blank' rel='noreferrer' href={result?.type === 'image' ? result.image : result.url} className='result-card'>
            <div className='card-content-wrapper'>
                {result.type === 'image' ?
                <ImageCard data={result} fallback={result.thumbnail} image={result.image} />
                :
                <VideoCard data={result} />}
                {result?.nsfw && explicitContentOption === 'blur' ?
                <SensitiveContent />
                :
                null}
            </div>
            <div className='info-container'>
                <h3>
                {result?.type === 'image' ?
                result?.snippet?.title :
                result?.title
                }
                </h3>
                {result?.type === 'image' ?
                <p className='image-dimensions-tag'>{result.width} x {result.height}</p>
                :
                null
                }
                <Link url={result?.type === 'image' ? result?.snippet?.url : result?.url} />
            </div>
        </a>
    )
}
