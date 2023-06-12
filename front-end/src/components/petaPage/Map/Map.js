import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from '@material-ui/core';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: -0.9247587, lng: 100.3632561 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB_e-OR52tjWaCnxAHjNCrfWhfGWzDQ_5U' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[10, 10, 10, 10]}
                options={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;