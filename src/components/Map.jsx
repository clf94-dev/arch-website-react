import React from 'react'

import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'

function Map(props) {
    return (
        <div className='map'>
            <LeafletMap
                center={[50, 50]}
                zoom={6}
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}>

                <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'/>

                <Marker position={[0, -50]}>
                    <Popup>
                        <h2></h2>
                        <h4></h4>
                    </Popup>
                </Marker>
                <Marker position={[60, 30]}>
                    <Popup>
                        <h2></h2>
                        <h4></h4>
                    </Popup>
                </Marker>
            </LeafletMap>
        </div>
    );

}

export default Map