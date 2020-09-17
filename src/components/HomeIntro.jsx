import {Grid} from '@material-ui/core'
import React, {useState} from 'react'
import {HomeIntroData} from './HomeIntroData'
import {ParamourD, ParamourT, ParamourM, TrinityD, TrinityT, TrinityM, SeraphD, SeraphM, SeraphT, FederalD, FederalM, FederalT} from './HomeIntroImg'

function HomeIntro() {
    const [project,
        setProject] = useState(0);

    const goToProject1 = () => setProject(0);
    const goToProject2 = () => setProject(1);
    const goToProject3 = () => setProject(2);
    const goToProject4 = () => setProject(3);

    const imgD = [ParamourD, SeraphD,FederalD , TrinityD];
    return (
        <Grid container>
            <Grid container direction='row'>
                <Grid item xs={12}>
                    <h1>{HomeIntroData[project].title}</h1>
                    <p>
                        {HomeIntroData[project].text}
                    </p>

                    <button>See Our Portfolio</button>
                </Grid>
                <Grid item xs={12}>
                    <img src={imgD[project]} alt={HomeIntroData[project].imgALT}/>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <div className="btn" onClick={goToProject1}>01</div>
                <div className="btn" onClick={goToProject2}>02</div>
                <div className="btn" onClick={goToProject3}>03</div>
                <div className="btn" onClick={goToProject4}>04</div>
            </Grid>
        </Grid>

    )
}

export default HomeIntro
