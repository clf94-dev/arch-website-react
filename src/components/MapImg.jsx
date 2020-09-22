import { Grid } from '@material-ui/core'
import React from 'react'
import MapIMG from './images/contact/desktop/image-map.png'

import MapIMGT from './images/contact/tablet/image-map.png'
import MapIMGM from './images/contact/mobile/image-map.png'

import './styles/App.css'

function MapImg() {
    return (
        <div>
            <Grid container  className='map-img-cont'>
                <img src={MapIMG} srcset={`${MapImg} 1500w, ${MapIMGT} 1080w ${MapIMGM} 756w`} alt="Map"/>
            </Grid>
        </div>
    )
}

export default MapImg
