import { Grid } from '@material-ui/core'
import React from 'react'
import MapIMG from './images/contact/tablet/image-map.png'
import './styles/App.css'

function MapImg() {
    return (
        <div>
            <Grid container  className='map-img-cont'>
                <img src={MapIMG} alt="Map"/>
            </Grid>
        </div>
    )
}

export default MapImg
