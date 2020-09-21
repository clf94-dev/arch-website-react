import {Grid} from '@material-ui/core'
import React, {useState} from 'react'

import {Link} from 'react-router-dom/cjs/react-router-dom.min';

import {HomeIntroData} from './HomeIntroData'
import {
    ParamourD,
    ParamourT,
    ParamourM,
    TrinityD,
    TrinityT,
    TrinityM,
    SeraphD,
    SeraphM,
    SeraphT,
    FederalD,
    FederalM,
    FederalT
} from './HomeIntroImg'

import './styles/App.css'


function HomeIntro() {
    const [project,
        setProject] = useState(0);

    const goToProject1 = () => setProject(0);
    const goToProject2 = () => setProject(1);
    const goToProject3 = () => setProject(2);
    const goToProject4 = () => setProject(3);

    const imgD = [ParamourD, SeraphD, FederalD, TrinityD];
    const imgT = [ParamourT, SeraphT, FederalT, TrinityT];
    const imgM =[ParamourM, SeraphM, FederalM, TrinityM];


    return (
        <div>
            
            <Grid container direction='row' className='intro-cont'>
               
                <Grid item xs={12}>
                    <img src={imgD[project]} srcset={`${imgT[project]} 1280w, ${imgD[project]} 1500w, ${imgM[project]} 756w`} alt={HomeIntroData[project].imgALT}/>
                </Grid>
                <Grid item xs={12} className='text-col'>
                    <h1>{HomeIntroData[project].title}</h1>
                    <p>
                        {HomeIntroData[project].text}
                    </p>

                    <Link to='/portfolio'><button>See Our Portfolio</button></Link>
                </Grid>
            </Grid>
            <Grid container direction='row' className='btn-row'>
                <div className="btn" onClick={goToProject1} style={{backgroundColor: project===0? 'black':'white', color:project===0? 'white':'black' }}>
                    <h3>01</h3>
                </div>
                <div className="btn" onClick={goToProject2}style={{backgroundColor: project===1? 'black':'white', color:project===1? 'white':'black' }}>
                    <h3>02</h3>
                </div>
                <div className="btn" onClick={goToProject3} style={{backgroundColor: project===2? 'black':'white', color:project===2? 'white':'black' }}>
                    <h3>03</h3>
                </div>
                <div className="btn" onClick={goToProject4} style={{backgroundColor: project===3? 'black':'white', color:project===3? 'white':'black' }}>
                    <h3>04</h3>
                </div>
            </Grid>
            
        </div>

    )
}

export default HomeIntro
