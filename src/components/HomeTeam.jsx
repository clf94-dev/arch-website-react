import {Grid} from '@material-ui/core'
import React from 'react'
import Team from './images/home/desktop/image-small-team.jpg'
import Arrow from './images/icons/icon-arrow.svg'
import './styles/App.css'

function HomeTeam() {
    return (
        <div>
            <Grid container direction='column' className='team-cont'>
                <img src={Team} alt="team"/>
                <Grid container direction='column' className='team-text'>
                    <h3>Small team, big ideas</h3>
                    <button>About Us <img src={Arrow} alt="arrow"/></button>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeTeam
