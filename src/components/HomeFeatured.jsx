import {Grid} from '@material-ui/core'
import React from 'react'

import {HomeFeaturedProj} from './HomeFeaturedProj'
import ProjectCard from './ProjectCard'

function HomeFeatured() {

    return (
        <div>
            <Grid container className='featured-cont'>
                <Grid container direction='row' className='feat-head-row'>
                    <Grid item md={6} xs={12}>
                        <h3>Featured</h3>
                    </Grid>
                    <Grid item md={6} xs={12} className='button-col'>
                        <button >See All</button>
                    </Grid>
                </Grid>
                <Grid container direction='row' className='feat-proj-row'>
                    {HomeFeaturedProj.map(proj => {
                        return (< ProjectCard key = {
                            proj.index
                        }
                        projNum = {
                            proj.num
                        }
                        title = {
                            proj.title
                        }
                        index = {
                            proj.index
                        }
                        imgALT = {
                            proj.imgALT
                        } />)
                    })}

                </Grid>

            </Grid>
        </div>
    )
}

export default HomeFeatured
