import {Grid} from '@material-ui/core'
import React from 'react'
import LogoWhite from './images/logo copy.svg'
function Footer() {
    return (
        <Grid container direction='row'>
            <Grid item md={2} xs={12}><img src={LogoWhite} alt="Arch white"/></Grid>
            <Grid item md={2} xs={12}>
                <p>Portfolio</p>
            </Grid>
            <Grid item md={2} xs={12}>
                <p>About Us</p>
            </Grid>
            <Grid item md={2} xs={12}>
                <p>Careers</p>
            </Grid>
            <Grid item md={4} xs={12}>
                <button>See Our Portfolio</button>
            </Grid>

        </Grid>
    )
}

export default Footer
