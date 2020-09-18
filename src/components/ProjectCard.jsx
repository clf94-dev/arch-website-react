import React from 'react'


import {Grid} from '@material-ui/core';
import {PortfolioProj } from './PortfolioProj'
import { PrototypeD, PrototypeM, PrototypeT, ParamourD, ParamourT, ParamourM, TrinityD, TrinityT, TrinityM, SeraphD, SeraphM, SeraphT, FederalD, FederalM, FederalT, EdelweissD, EdelweissM, EdelweissT, EeboxD, EeboxM, EeboxT, SolD, SolM, SolT, Tower228D, Tower228M, Tower228T, NetcryD, NetcryT, NetcryM, HypersD, HypersT, HypersM, SXIVD, SXIVM, SXIVT } from './PortfolioProjImg'
import  { SolFD,  Tower228BD, PrototypePD} from './FeaturedProjImg'
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

function ProjectCard(props) {
    const FeaturedD = [SolFD, Tower228BD, PrototypePD];
    const PortfolioProjD = [SeraphD ,EeboxD, FederalD, SolD,PrototypeD, Tower228D,EdelweissD, NetcryD, HypersD, SXIVD,  TrinityD,  ParamourD];
    return (

        <Grid className={props.portfolio?'project-port-card-cont': 'project-card-cont'} item lg={4} md={12}>
            <img src={props.portfolio? PortfolioProjD[props.index]: FeaturedD[props.index]} alt={props.imgALT}/>
            <h1>{props.projNum}</h1>
            <Grid container direction='column' className='project-card-text'>
                <h3
                    style={{
                    color: (props.index == 0 && !props.portfolio)||(props.index == 3 && props.portfolio)
                        ? 'black'
                        : '#EEEFF4'
                }}>{props.title}</h3>
                <p style={{display: !props.portfolio&& 'none', color:props.index == 3 && props.portfolio ? 'black'
                        : '#EEEFF4' }}>{props.text}</p>
                <Link to='/portfolio'>
                    <button
                        style={{
                        color: props.index == 0
                            ? 'black'
                            : '#EEEFF4',
                        borderColor: props.index == 0
                            ? 'black'
                            : '#EEEFF4',
                            display: props.portfolio&&'none'
                    }}>View All Projects</button>
                </Link>
            </Grid>
        </Grid>

    )
}

export default ProjectCard
