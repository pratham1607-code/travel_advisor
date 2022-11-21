import { CardMedia } from '@mui/material';
import useStyles from './styles';
const PlaceDetails =({place})=>{
    const classes= useStyles();
    return (
        <Card elevation ={6}>
            <CardMedia
            style={{height:350}}
            image={place.photo ? place.photo.images.large.url:'https://'}
            title={place.name}/>
            <CardContent>
                <t
            </CardContent>
        </Card>
    )
}