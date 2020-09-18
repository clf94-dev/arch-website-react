import React from 'react'

import SolD from './images/portfolio/desktop/image-del-sol.jpg'
import Tower228BD from './images/portfolio/desktop/image-228b.jpg'
import PrototypeD from './images/portfolio/desktop/image-prototype.jpg'
import { Grid } from '@material-ui/core';


function ProjectCard(props) {
    const FeaturedD = [SolD, Tower228BD, PrototypeD];
    return (
        
        
                <Grid item lg={4} md={12}className='project-card-cont'>
                    <img src={FeaturedD[props.index]} alt={props.imgALT}/>
                 <h1>{props.projNum}</h1>
                    <Grid container direction='column' className='project-card-text'>
                        <h3 style={{color:props.index==0? 'black': '#EEEFF4'}}>{props.title}</h3>
                        <button style={{color: props.index==0? 'black': '#EEEFF4', borderColor: props.index==0? 'black': '#EEEFF4'}}>View All Projects</button>
                    </Grid>
                </Grid>
         
     
      
    )
}

export default ProjectCard
