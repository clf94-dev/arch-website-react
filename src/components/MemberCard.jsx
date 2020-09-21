import {Grid} from '@material-ui/core'
import React from 'react'
import {JakeD, ThompsonD, JacksonD, MariaD} from './MembersImg'

function MemberCard(props) {
    const MembersD = [JakeD, ThompsonD, JacksonD, MariaD]
    return (
        <div>
            <Grid container direction='row' className='member-card'>
                <Grid item md={6} xs={12} className='card-col'>
                    <img src={MembersD[props.index]} alt={props.imgAlt}/>
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default MemberCard
