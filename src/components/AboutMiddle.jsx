import {Grid} from '@material-ui/core'
import React from 'react'
import MiddleImg from './images/about/desktop/image-heritage.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function AboutMiddle() {
    return (
        <div>

            <Grid container direction='row' className='middle-cont' data-aos='fade-right' data-aos-delay='300'>
                <Grid item md={6} sm={12} className='text-col'>
                    <h3>Our Heritage</h3>
                    <p>Founded in 2007, we started as a trio of architects. Our complimentary skills
                        and relentless attention to detail turned Arch into one of the most sought after
                        boutique firms in the country.</p>
                    <p>Speciliazing in Urban Design allowed us to focus on creating exceptional
                        structures that live in harmony with their surroundings. We consider every
                        detail from every surrounding element to inform our designs.</p>
                    <p>Our small team of world-class professionals provides input on every project.
                    </p>
                </Grid>
                <Grid item md={6} sm={12} className='img-col'>
                    <img src={MiddleImg} alt="Heritage"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutMiddle
