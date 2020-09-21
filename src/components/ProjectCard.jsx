import React from 'react'


import {Grid} from '@material-ui/core';
import {PortfolioProj } from './PortfolioProj'
import { PrototypeD, PrototypeM, PrototypeT, ParamourD, ParamourT, ParamourM, TrinityD, TrinityT, TrinityM, SeraphD, SeraphM, SeraphT, FederalD, FederalM, FederalT, EdelweissD, EdelweissM, EdelweissT, EeboxD, EeboxM, EeboxT, SolD, SolM, SolT, Tower228D, Tower228M, Tower228T, NetcryD, NetcryT, NetcryM, HypersD, HypersT, HypersM, SXIVD, SXIVM, SXIVT } from './PortfolioProjImg'
import  { SolFD, Tower228BD, PrototypePD, SolFM, SolFT, Tower228BM, Tower228BT, PrototypePM, PrototypePT } from './FeaturedProjImg'
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

function ProjectCard(props) {
    const FeaturedD = [SolFD, Tower228BD, PrototypePD];
    const FeaturedT = [SolFT, Tower228BT, PrototypePT];
    const FeaturedM = [SolFM, Tower228BM, PrototypePM];
    const PortfolioProjD = [SeraphD ,EeboxD, FederalD, SolD,PrototypeD, Tower228D,EdelweissD, NetcryD, HypersD, SXIVD,  TrinityD,  ParamourD];
    const PortfolioProjT = [SeraphT ,EeboxT, FederalT, SolT,PrototypeT, Tower228T,EdelweissT, NetcryT, HypersT, SXIVT,  TrinityT,  ParamourT];
    const PortfolioProjM = [SeraphM ,EeboxM, FederalM, SolD,PrototypeM, Tower228M,EdelweissM, NetcryM, HypersM, SXIVM,  TrinityM,  ParamourM];
    
    return (

        <Grid className={props.portfolio?'project-port-card-cont': 'project-card-cont'} item lg={4} md={12}>
            <img src={props.portfolio? PortfolioProjD[props.index]: FeaturedD[props.index]} srcset={props.portfolio? `${PortfolioProjD[props.index]} 1500w, ${PortfolioProjT[props.index]} 1080w, ${PortfolioProjM[props.index]} 756w `: `${FeaturedD[props.index]} 1500w, ${FeaturedM[props.index]} 756w, ${FeaturedT[props.index]} 1080w`} alt={props.imgALT}/>
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
