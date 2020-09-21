import {Grid} from '@material-ui/core'
import React from 'react'
import {TopInfo} from './TopInfo'

import TopAboutD from './images/about/desktop/image-hero.jpg'
import TopContactD from './images/contact/desktop/image-hero.jpg'
import TopAboutT from './images/about/tablet/image-hero.jpg'
import TopContactT from './images/contact/tablet/image-hero.jpg'
import TopAboutM from './images/about/mobile/image-hero.jpg'
import TopContactM from './images/contact/mobile/image-hero.jpg'

function TopAboutContactCard(props) {
    return (
        <div>
            <Grid container direction='row' className='top-section-cont'>
                <Grid item md={6} xs={12} className='img-col'>
                    <img src={props.contact? TopContactD: TopAboutD} srcset={props.contact? `${TopContactD} 1500w,${TopContactM} 756w,${TopContactT} 1080w `: `${TopAboutD} 1500w,${TopAboutM} 756w,${TopAboutT} 1080w `}  alt={props.contact
                            ? TopInfo[1].imgALT
                            : TopInfo[0].imgALT}/>
                </Grid>
                <Grid item md={6} xs={12} className='text-col'>
                    <h1>{props.contact
                            ? TopInfo[1].bigtitle
                            : TopInfo[0].bigtitle}</h1>
                    <h3>{props.contact
                            ? TopInfo[1].title
                            : TopInfo[0].title}</h3>
                    <p>{props.contact
                            ? TopInfo[1].text
                            : TopInfo[0].text}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopAboutContactCard
