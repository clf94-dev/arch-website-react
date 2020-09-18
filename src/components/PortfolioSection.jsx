import { Grid } from '@material-ui/core'
import React from 'react'
import {PortfolioProj} from './PortfolioProj'
import ProjectCard from './ProjectCard'

import './styles/App.css'

function PortfolioSection() {
    return (
      
            <Grid container direction='row' className='portf-proj-row'>
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
        
    )
}

export default PortfolioSection
