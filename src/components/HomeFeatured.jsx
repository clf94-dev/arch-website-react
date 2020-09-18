import {Grid} from '@material-ui/core'
import React from 'react'


import {HomeFeaturedProj} from './HomeFeaturedProj'
import ProjectCard from './ProjectCard'

function HomeFeatured() {


    return (
        <div>
            <Grid container>
                <Grid container direction='row'>
                    <Grid item md={6} xs={12}>
                        <h3>Featured</h3>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <button>See All</button>
                    </Grid>
                    <Grid container direction='row'>
                        {HomeFeaturedProj.map(proj => { return(< ProjectCard key = { proj.index} projNum = { proj.num } title = {   proj.title }  index = { proj.index } imgALT = {  proj.imgALT   } />)
                    })}

                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

export default HomeFeatured
