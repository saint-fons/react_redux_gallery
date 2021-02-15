import React from "react";
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './../style/theme';
import {GlobalStyles} from './../style/global';
import {useState} from 'react';
import star from "./../style/img/star-solid.svg"


const Gallery = (props) => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (

        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>

                <div className={"Gallery_Container_Element1"}>
                    <button
                        onClick={toggleTheme}>
                        {theme === 'light' ?
                            <img
                                src={star}
                                alt={"star"}
                                className={"DarkModeStar"}/>
                            :
                            <img
                                src={star}
                                alt={"star"}
                                className={"DarkModeStar"}/>
                        }
                    </button>
                    {props.countries.map(i => (
                        <a href={i.url}>
                            <img
                                className={"Gallery_Images_Container"}
                                src={i.url}
                                alt={"img"}
                            />
                        </a>

                    ))}
                </div>


            </>
        </ThemeProvider>
    )
}

export default Gallery