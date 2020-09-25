import {Grid} from '@material-ui/core'
import React from 'react'
import MemberCard from './MemberCard.jsx'
import {MembersAbout} from './MembersAbout'

import './styles/App.css'

function TeamAbout() {
    return (
        
            <Grid container direction='row' className='team-cont'>
                <Grid item lg={4} md={12} className='title-col'>
                    <h3>The Leaders</h3>
                </Grid>
                <Grid item lg={8} md={12}>
                    <Grid container direction='row' className='members-col'>
                        {MembersAbout.map(person => {return ( < MemberCard name = {
                                person.name
                            }
                            position = {
                                person.position
                            }
                            key = {
                                person.index
                            }
                            imgAlt = {
                                person.imgALT
                            } 
                            delay={person.delay}
                            index={person.index}/>)
                        })}
                    </Grid>
                </Grid>
            </Grid>
 
    )
}

export default TeamAbout
