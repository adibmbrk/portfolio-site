import React from 'react';
import Typewriter from "typewriter-effect";
import "../styles/Intro.css";

import Button from '@mui/material/Button';



const Intro = () => {
    return (
        <>
            <div class="intro-title">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("hi, it's ")
                    .typeString("<span class='intro-name'>adib</span>")
                    .typeString(" here")
                    .start();
                    }}
                />
            </div>
            <div class="intro-subtitle">
                <p>i build software that makes people say, 'Whoa, how'd he do that?</p>
            </div>
            <div class="intro-para">
                <p>I'm a self-taught developer based in Colombo, Sri Lanka. My interests lie in the area of full stack development,<br/> data science and artificial intelligence.</p>
            </div>
            <div class="">
                <a href='mailto:adibmbrk@gmail.com'>
                    <Button class="intro-button" color="primary" size="small" variant="elevated"><b>Say Hi 👋</b></Button>
                </a>
            </div>     
        </>
    );
}

export default Intro;