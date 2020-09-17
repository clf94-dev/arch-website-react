import { Grid } from '@material-ui/core'
import React from 'react'
import Team from './images/home/desktop/image-small-team.jpg'


function HomeTeam() {
    return (
        <div>
            <Grid container  direction='column'>
                <img src={Team} alt="team"/>
                <h3>Small team, big ideas</h3>
                <button>About Us</button>
            </Grid>
        </div>
    )
}

export default HomeTeam
