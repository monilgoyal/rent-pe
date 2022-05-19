import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import WcIcon from '@mui/icons-material/Wc';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { Chip } from '@mui/material';

export default function ResultCard(props) {
    return (
        <Card sx={{ width: "100%", my: "10px" }}>
            <CardHeader
                avatar={
                    <Avatar sx={props.gender === 'male' ? { bgcolor: '#637bfe' } : props.gender === 'female' ? { bgcolor: '#d500f9' } : { bgcolor: orange[800] }} aria-label="recipe">
                        {props.gender === 'male' ? <ManIcon /> : props.gender === 'female' ? <WomanIcon /> : <WcIcon />}
                    </Avatar>
                }
                title={props.name}
                subheader={props.addr}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.thumbnail}
                alt={props.name}

            />
            <CardContent>
                <Box position="relative">
                    {props.rating && <Box position='absolute' top="-200px" right="0" border={'1px solid #555'} px='6px' borderRadius={'4px'} bgcolor="black" color={"white"}>{`${props.rating}(${props.reviewCount})`}&nbsp;<span style={{ color: 'gold', fontSize: '18px' }}>★</span></Box>}
                    <Box position='absolute' top="-50px" right="0" sx={{ overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap", width: "100%" }}  >
                        <Box position={'absolute'} left="-20px">{'<'}</Box>
                        {props.availability.flats && <Chip avatar={<Avatar sx={{ bgcolor: "#555" }} ><Box color="white">{props.availability.flats}</Box></Avatar>} label="Flat" size="small" sx={{ color: "white", background: "black", ml: "2px" }} />}
                        {props.availability.rooms && Object.keys(props.availability.rooms).map(key =>
                            <Chip avatar={<Avatar sx={{ bgcolor: "#555" }} ><Box color="white">{props.availability.rooms[key]}</Box></Avatar>} label={key + " Room"} size="small" sx={{ color: "white", background: "black", ml: "2px" }} key={key} />
                        )}

                        <Box position={'absolute'} right="-20px">{'>'}</Box>
                    </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ position: 'relative' }}>

                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <span style={{ position: 'absolute', right: 10 }}>₹{props.rent.init_Price}&nbsp;{props.rent.end_Price && `- ₹${props.rent.end_Price}`}</span>
            </CardActions>
        </Card>
    );
}