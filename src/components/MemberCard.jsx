import {Grid} from '@material-ui/core'
import React from 'react'

function MemberCard(props) {
    return (
        <div>
            <Grid container direction='row'>
            <Grid item md={6} xs={12}>
                <img src="" alt={props.imgAlt}/>
                <h3>{props.name}</h3>
                <p>{props.position}</p>
            </Grid>
            </Grid>
        </div>
    )
}

export default MemberCard
