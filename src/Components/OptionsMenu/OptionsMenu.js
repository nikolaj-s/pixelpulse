import React from 'react';

import { TextInput } from '../TextInput/TextInput';
import { InputTitle } from '../InputTitle/InputTitle';
import { RadioInput } from '../RadioInput/RadioInput';

import "./OptionsMenu.css";
import { Spacer } from '../Spacer/Spacer';

export const OptionsMenu = ({
    source = "", 
    setSource = () => {},
    currentSortOption = "",
    sortOptions = [],
    explicitContentOptions = [],
    currentExplicitContentOption = "",
    setOption = () => {}
}) => {

    return (
        
        <div className='options-menu-container'>
            <Spacer />
            <InputTitle title={"Paste a website to source content from"} />
            <TextInput value={source} action={setSource} placeholder='https://www.google.com/' />
            <InputTitle title={"Sort By"} />
            <RadioInput options={sortOptions} 
            selectedOption={currentSortOption} 
            action={setOption}
            selector='currentSortOption'
            />
            <InputTitle title={"Filter Sensitive Content"} />
            <RadioInput options={explicitContentOptions}
            selectedOption={currentExplicitContentOption}
            action={setOption}
            selector='currentExplicitContentOption' />
        </div>
    
    )

}
