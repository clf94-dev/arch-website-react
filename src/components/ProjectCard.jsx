import React from 'react'

import SolD from './images/portfolio/desktop/image-del-sol.jpg'
import Tower228BD from './images/portfolio/desktop/image-228b.jpg'
import PrototypeD from './images/portfolio/desktop/image-prototype.jpg'
import { Grid } from '@material-ui/core';


function ProjectCard(props) {
    const FeaturedD = [SolD, Tower228BD, PrototypeD];
    return (
        
        
                <Grid item lg={4} md={12}>
                    <img src={FeaturedD[props.index]} alt={props.imgALT}/>

                    <Grid container direction='column'>
                        <h3>{props.title}</h3>
                        <button>View All Projects</button>
                    </Grid>
                </Grid>
         
     
      
    )
}

export default ProjectCard
