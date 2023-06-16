import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();

  const coordinates = { lat: -0.9247587, lng: 100.3632561 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "process.env.REACT_APP_GOOGLE_MAP_API_KEY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[10, 10, 10, 10]}
        options={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
