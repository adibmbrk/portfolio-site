import React from 'react';
import Typewriter from "typewriter-effect";
import "../styles/Intro.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Intro = () => {
    return (
        <>
            <span class="intro-title">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("hi, it's ")
                    .typeString("<span class='intro-name'>adib</span>")
                    .typeString(" here")
                    .start();
                    }}
                />
            </span>
            <div class="intro-links">
                <a href='mailto:adibmbrk@gmail.com'>
                    <EmailIcon className='intro-icon'></EmailIcon>
                </a>
                <a href='https://github.com/adibmbrk'>
                    <GitHubIcon className='intro-icon'></GitHubIcon>
                </a>
                <a href='https://www.linkedin.com/adibmbrk/'>
                    <LinkedInIcon className='intro-icon'></LinkedInIcon>
                </a>
            </div>
        </>
        
        
        
    );
}

export default Intro;