import React from "react";
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,chip} from @'material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon  from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from '/styles';

const PlaceDetails=({place })=>{
    console.log(place);
    return (
        <h1>{place.name}</h1>
    );
}
export default PlaceDetails;
