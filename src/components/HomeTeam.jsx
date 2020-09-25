import {Grid} from '@material-ui/core'
import React from 'react'
import Team from './images/home/desktop/image-small-team.jpg'
import TeamT from './images/home/tablet/image-small-team.jpg'
import TeamM from './images/home/mobile/image-small-team.jpg'
import Arrow from './images/icons/icon-arrow.svg'
import './styles/App.css'

import {Link} from 'react-router-dom/cjs/react-router-dom.min';


import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


function HomeTeam() {
    return (
        <div>
            <Grid container direction='column' className='team-cont' data-aos='fade-up' data-aos-delay='300'>
                <img src={Team} srcset={`${Team} 1500w, ${TeamM} 756w, ${TeamT} 1080w`} alt="team"/>
                <Grid container direction='column' className='team-text'>
                    <h3>Small team, big ideas</h3>
                    <Link to='/about'>
                        <button>About Us
                            <img src={Arrow}  alt="arrow"/></button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeTeam
