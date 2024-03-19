import React from "react";
import googleMapReact from "google-map-react";
import { Paper,Typography,useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/lab";
import Rating from "@material-ui/lab";
import useStyle from './styles'
const Map=()=>{
    const classes = useStyle()
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates={lat:0,lng:0};
    return (
        <div className={classes.mapContainer}>
            <googleMapReact 
            bootstrapURLKeys={{key: ''}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}//50 left ,50right,50 top and 50 bottom
            options={''}
            onChange={''}
            onClildClick={''}
            >
                
            </googleMapReact>

        </div>
    ) 
}
export default Map;
