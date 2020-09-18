import {Grid} from '@material-ui/core'
import React from 'react'
import LogoWhite from './images/logo copy.svg'
import './styles/App.css'

function Footer() {
    return (
        <Grid container direction='row' className='footer-cont'>
            <Grid item md={2} xs={12} className='logo-cont'><img src={LogoWhite} alt="Arch white"/></Grid>
           
                <Grid item md={2} xs={12} className='links-col'>
                    <p>Portfolio</p>
                </Grid>

                <Grid item md={2} xs={12} className='links-col'>
                    <p>About Us</p>
                </Grid>
                <Grid item md={2} xs={12} className='links-col'>
                    <p>Careers</p>
                </Grid>
                <Grid item md={4} xs={12} className='btn-col'>
                    <button>See Our Portfolio</button>
                
            </Grid>

        </Grid>
    )
}

export default Footer
