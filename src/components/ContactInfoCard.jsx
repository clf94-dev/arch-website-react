import {Grid} from '@material-ui/core'
import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function ContactInfoCard(props) {
    return (
        <Grid container direction='row' >
            <Grid item lg={12} xs={12} className='info-card' data-aos='fade-left' >
                <p>{props.office}</p>
                <p>
                    {props.mail}
                </p>
                <p>
                    {props.address}
                </p>
                <p>
                    {props.phone}
                </p>
            </Grid>
        </Grid>
    )
}

export default ContactInfoCard
