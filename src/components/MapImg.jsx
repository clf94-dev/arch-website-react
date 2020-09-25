import { Grid } from '@material-ui/core'
import React from 'react'
import MapIMG from './images/contact/desktop/image-map.png'

import MapIMGT from './images/contact/tablet/image-map.png'
import MapIMGM from './images/contact/mobile/image-map.png'

import './styles/App.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function MapImg() {
    return (
        <div>
            <Grid container  className='map-img-cont' data-aos='fade-up' data-aos-delay='300'>
                <img src={MapIMG} srcset={`${MapImg} 1500w, ${MapIMGT} 1080w ${MapIMGM} 756w`} alt="Map"/>
            </Grid>
        </div>
    )
}

export default MapImg
