import { Grid } from '@material-ui/core'
import React from 'react'
import { ContactDetailsInfo } from './ContactDetailsInfo'
import ContactInfoCard from './ContactInfoCard'

function ContactDetails() {
    return (
        <div>
            <Grid container direction='row'>
<Grid item lg={4} xs={12}>
    <h3>Contact Details</h3>
</Grid>
{ContactDetailsInfo.map(info =>{
    return( <ContactInfoCard key={info.index} office={info.office} mail={info.mail} address={info.address} phone={info.phone}  />)
})}

            </Grid>
        </div>
    )
}

export default ContactDetails
