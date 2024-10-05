import React from 'react';

import "./Loading.css";

export const Loading = ({loading}) => {

    return (
        <>
        {loading ?
        <div className='loading-indicator-container'>
            <div className='loading-icon-wrapper'>
            <svg width="100%" height="100%" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='path-1' d="M8 56H16V64H8V56Z" fill="url(#paint0_linear_147_35)"/>
                <path className='path-2' d="M8 48H16V56H8V48Z" fill="url(#paint1_linear_147_35)"/>
                <path className='path-3' d="M8 40H16V48H8V40Z" fill="url(#paint2_linear_147_35)"/>
                <path className='path-4' d="M8 32H16V40H8V32Z" fill="url(#paint3_linear_147_35)"/>
                <path className='path-5' d="M8 24H16V32H8V24Z" fill="url(#paint4_linear_147_35)"/>
                <path className='path-6' d="M8 16H16V24H8V16Z" fill="url(#paint5_linear_147_35)"/>
                <path className='path-7' d="M8 8H16V16H8V8Z" fill="url(#paint6_linear_147_35)"/>
                <path className='path-8' d="M16 0H24V8H16V0Z" fill="url(#paint7_linear_147_35)"/>
                <path className='path-9' d="M24 0H32V8H24V0Z" fill="url(#paint8_linear_147_35)"/>
                <path className='path-10' d="M32 0H40V8H32V0Z" fill="url(#paint9_linear_147_35)"/>
                <path className='path-11' d="M40 8H48V16H40V8Z" fill="url(#paint10_linear_147_35)"/>
                <path className='path-12' d="M40 16H48V24H40V16Z" fill="url(#paint11_linear_147_35)"/>
                <path className='path-13' d="M40 24H48V32H40V24Z" fill="url(#paint12_linear_147_35)"/>
                <path className='path-14' d="M32 32H40V40H32V32Z" fill="url(#paint13_linear_147_35)"/>
                <path className='path-15' d="M24 32H32V40H24V32Z" fill="url(#paint14_linear_147_35)"/>
                <path className='path-16' d="M16 32H24V40H16V32Z" fill="url(#paint15_linear_147_35)"/>
                <path className='path-17' d="M0 32H8V40H0V32Z" fill="url(#paint16_linear_147_35)"/>
                <defs>
                <linearGradient id="paint0_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint1_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint2_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint3_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint4_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint5_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint6_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint7_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint8_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint9_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint10_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint11_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint12_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint13_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint14_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint15_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                <linearGradient id="paint16_linear_147_35" x1="0.308004" y1="-9.72252e-07" x2="47.692" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#78FCFC"/>
                <stop offset="1" stop-color="#D20000"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
        </div>
        : null}
        </>
    )
}
