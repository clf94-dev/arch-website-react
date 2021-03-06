import {Grid} from '@material-ui/core'
import React from 'react'
import {JakeD, ThompsonD, JacksonD, MariaD} from './MembersImg'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function MemberCard(props) {
    const MembersD = [JakeD, ThompsonD, JacksonD, MariaD]
    return (
        <div>
            <Grid container direction='row' className='member-card' data-aos='fade-left' data-aos-delay={props.delay}>
                <Grid item sm={6} xs={12} className='card-col'>
                    <img src={MembersD[props.index]} alt={props.imgAlt}/>
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                    <Grid container direction='row'>
                        <i className='fab fa-2x fa-linkedin'></i>
                        <i className='fab fa-2x fa-twitter'></i>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MemberCard
