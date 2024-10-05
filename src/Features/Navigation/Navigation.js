import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useAnimation, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { TextInput } from '../../Components/TextInput/TextInput';
import { selectCurrentExplicitContentOption, selectCurrentSortOption, selectExplicitContentOptions, selectOptionsMenuOpenState, selectQuery, selectSortOptions, selectSource, setOption, setQuery, setSource, toggleOptionsMenu } from './NavigationSlice';
import { searchImages, selectLoadingState, selectResults } from '../Results/ResultsSlice';
import { PixelPulseIcon } from '../../Components/Icons/PixelPulseIcon/PixelPulseIcon';
import { SettingsButton } from '../../Components/Buttons/SettingsButton/SettingsButton';
import { OptionsMenu } from '../../Components/OptionsMenu/OptionsMenu';
import { Loading } from '../../Components/Loading/Loading';
import { closeContent, selectContentOpen } from '../ExpandedContent/ExpandedContentSlice';
import { ExpandedContent } from '../ExpandedContent/ExpandedContent';

import "./Navigation.css";

export const Navigation = () => {

    const animation = useAnimation();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const query = useSelector(selectQuery);

    const loading = useSelector(selectLoadingState);

    const results = useSelector(selectResults);

    const optionsMenuOpenState = useSelector(selectOptionsMenuOpenState);

    const sortOptions = useSelector(selectSortOptions);

    const explicitContentOptions = useSelector(selectExplicitContentOptions);

    const currentSortOption = useSelector(selectCurrentSortOption);

    const currentExplicitContentOption = useSelector(selectCurrentExplicitContentOption);

    const contentOpen = useSelector(selectContentOpen);

    const source = useSelector(selectSource);

    const handleTextInput = (value) => {

        dispatch(setQuery(value));
    
    }

    const search = () => {

        if (query.length === 0) return;

        const urlParams = new URLSearchParams(window.location.search);

        urlParams.set('q', query);

        let new_url = '/search?' + urlParams.toString();

        navigate(new_url);

        dispatch(searchImages())
        
    }

    const handleToggleOptionsMenu = () => {

        if (loading) return;

        if (contentOpen) dispatch(closeContent());

        if (optionsMenuOpenState) {
            dispatch(toggleOptionsMenu());

            animation.start({
                height: 38
            })
        } else {
            animation.start({
                height: 270
            }).then(() => {
                dispatch(toggleOptionsMenu());
            })
        }
    }

    const handleCloseContent = () => {
        dispatch(closeContent())
    }

    const handleSetOption = (selector, value) => {
        dispatch(setOption({selector: selector, value: value}));
    }

    const handleSetSource = (value) => {
        dispatch(setSource(value));
    }

    React.useEffect(() => {

        const state = JSON.parse(localStorage.getItem('state'));

        if (state) {
            dispatch(setOption({selector: "currentExplicitContentOption", value: state.currentExplicitContentOption}));
            
            dispatch(setOption({selector: 'currentSourtOption', value: state.currentSortOption}))
        }

    }, [])

    React.useEffect(() => {

        if (loading && optionsMenuOpenState) dispatch(toggleOptionsMenu());

        if (loading) {
            animation.start({
                height: 300
            })
        } else if (!loading) {
            animation.start({
                height: 'auto'
            })
        }

    // eslint-disable-next-line
    }, [loading]) 

    React.useEffect(() => {

        if (contentOpen) {
            animation.start({
                height: 'calc(100% - 90px)',
                maxWidth: 'calc(100% - 150px'
            })
        } else {
            animation.start({
                height: 'auto',
                maxWidth: 800
            })
        }

    // eslint-disable-next-line
    }, [contentOpen])

    return (
        <>
            <div 
            onClick={() => {
                if (optionsMenuOpenState) handleToggleOptionsMenu();
                if (contentOpen) handleCloseContent()
            }}
            className='navigation-wrapper'
                style={{
                    width: 'calc(100% - 10px)',
                    padding: results?.length > 0 ? '10px 5px' : '0px 5px',
                    height: results?.length === 0 ? '100vh' : 'auto',
                }}
            >   
                <motion.nav
                onClick={(e) => {e.stopPropagation()}}
                transition={{duration: 0.2}}
                animate={animation}
                >   
                    <div className='nav-inner-wrapper'>
                        <div className='nav-icon-wrapper'>
                            <PixelPulseIcon />
                        </div>
                        <TextInput showSearchIcon={true} enter={search} action={handleTextInput} value={query} /> 
                        <SettingsButton action={handleToggleOptionsMenu} />
                    </div>
                    {optionsMenuOpenState ?
                    <OptionsMenu 
                    currentSortOption={currentSortOption}
                    sortOptions={sortOptions}
                    explicitContentOptions={explicitContentOptions}
                    currentExplicitContentOption={currentExplicitContentOption}
                    setOption={handleSetOption}
                    source={source}
                    setSource={handleSetSource}
                    />
                    : null}
                    <Loading loading={loading} />
                    <ExpandedContent />
                </motion.nav>
            </div>
            {optionsMenuOpenState || loading || contentOpen ? <motion.div transition={{duration: 0.2}} initial={{opacity: 0}} animate={{opacity: 1}} onClick={() => {handleToggleOptionsMenu(); handleCloseContent()}} className='options-close-listener' /> : null}
        </>
    )
}
