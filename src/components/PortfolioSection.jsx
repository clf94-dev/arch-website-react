import { Grid } from '@material-ui/core'
import React from 'react'
import {PortfolioProj} from './PortfolioProj'
import ProjectCard from './ProjectCard'

function PortfolioSection() {
    return (
        <div>
            <Grid container direction='row' className='feat-proj-row'>
                    {PortfolioProj.map(proj => {
                        return (< ProjectCard key = {
                            proj.index
                        }
                        portfolio={true}
                        projNum = {
                            proj.num
                        }
                        title = {
                            proj.title
                        }
                        text={proj.text}
                        index = {
                            proj.index
                        }
                        imgALT = {
                            proj.imgALT
                        } />)
                    })}

                </Grid>
        </div>
    )
}

export default PortfolioSection
