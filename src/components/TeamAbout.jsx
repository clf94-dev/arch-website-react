import {Grid} from '@material-ui/core'
import React from 'react'
import MemberCard from './MemberCard.jsx'
import {MembersAbout} from './MembersAbout'

function TeamAbout() {
    return (
        <div>
            <Grid container direction='row'>
                <Grid item lg={6} md={12}>
                    <h3>The Leaders</h3>
                </Grid>
                <Grid item lg={6} md={12}>
                    <Grid container direction='row'>
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
                            
                            index={person.index}/>)
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default TeamAbout
