import {Grid} from '@material-ui/core'
import React from 'react'
import {ContactDetailsInfo} from './ContactDetailsInfo'
import ContactInfoCard from './ContactInfoCard'

import './styles/App.css'

function ContactDetails() {
    return (
   
            <Grid container direction='row' className='contact-details-cont'>
                <Grid item lg={6} xs={12} className='title-col'>
                    <h3>Contact Details</h3>
                </Grid>
                <Grid item lg={6} xs={12} className='info-cont'>
                    {ContactDetailsInfo.map(info => {
                        return (<ContactInfoCard
                            key={info.index}
                            office={info.office}
                            mail={info.mail}
                            address={info.address}
                            phone={info.phone}/>)
                    })}
                </Grid>
            </Grid>
        
    )
}

export default ContactDetails
