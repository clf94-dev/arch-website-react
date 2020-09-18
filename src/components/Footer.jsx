import {Grid} from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

import LogoWhite from './images/logo copy.svg'
import './styles/App.css'

function Footer() {
    return (
        <Grid container direction='row' className='footer-cont'>
            <Grid item md={2} xs={12} className='logo-cont'>
                <Link to='/'>       <img src={LogoWhite} alt="Arch white"/></Link>
         </Grid>
           
                <Grid item md={2} xs={12} className='links-col'>
                 <Link to='/portfolio' ><p>Portfolio</p></Link>   
                </Grid>

                <Grid item md={2} xs={12} className='links-col'>
                <Link to='/about' > <p>About Us</p></Link>   
                </Grid>
                <Grid item md={2} xs={12} className='links-col'>
                <Link to='/careers' > <p>Careers</p></Link>   
                </Grid>
                <Grid item md={4} xs={12} className='btn-col'>
                   <Link to='/portfolio'> <button>See Our Portfolio</button></Link>
                
            </Grid>

        </Grid>
    )
}

export default Footer
