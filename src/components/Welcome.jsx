
import React from 'react'
import {Grid} from '@material-ui/core'
import WelcomeD from './images/home/desktop/image-welcome.jpg'

import './styles/App.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function Welcome() {
    return (
      
            <Grid container direction='row' className='welcome-cont' data-aos='fade-up' data-aos-delay='300'>
                <Grid item md={7} xs={12} className='text-col' data-aos='fade-right' data-aos-delay='700'>
                    <h1>Welcome</h1>
                    <h3>Welcome to Arch Studio</h3>
                    <p>We have a unique network and skillset to help bring your projects to life.
                        Our small team of highly skilled individuals combined with our large network put
                        us in a strong position to deliver exceptional results.</p>
                    <p>Over the past 10 years, we have worked on all kinds of projects. From
                        stations to high-rise buildings, we create spaces that inspire and delight.</p>
                    <p>We work closely with our clients so that we understand the intricacies of
                        each project. This allows us to work in harmony the surrounding area to create
                        truly stunning projects that will stand the test of time.</p>
                </Grid>
                <Grid item md={5} xs={12} className='img-col' data-aos='fade-left' data-aos-delay='500'>
                    <img src={WelcomeD} alt="welcome"/>
                </Grid>
            </Grid>
        
    )
}

export default Welcome;
