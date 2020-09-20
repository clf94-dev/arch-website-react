import {Grid} from '@material-ui/core'
import React from 'react'

function ContactInfoCard(props) {
    return (
        <div>
            <Grid item lg={12} xs={12}>
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
        </div>
    )
}

export default ContactInfoCard
