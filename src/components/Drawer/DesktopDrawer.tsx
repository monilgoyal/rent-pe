
import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { RootState } from '../../state/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { CardContent, Divider, IconButton, IconButtonProps, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../state';

const drawerWidth = 240;
// export const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
    [theme.breakpoints.up("md")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiPaper-root': {
            marginTop: "64px",
            height: `calc(100vh - 64px)`
        },

        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),

        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function DesktopDrawer({ children }) {
    const above_1313 = useMediaQuery('(min-width:1313px)');
    const open = useSelector((state: RootState) => state.IsOpen)
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch()
    const toggleDrawer = bindActionCreators(actionCreator.drawerToggle, dispatch)

    const handleExpandClick = () => {
        if (!open && above_1313)
            setExpanded(!expanded);
        else if (open && above_1313) {
            toggleDrawer()
            setExpanded(true);
        }
        else if (open && !above_1313) {
            setExpanded(!expanded);

        }
        else {
            toggleDrawer()
            setExpanded(true);
        }
    };
    // useEffect(() => {
    //     if (expanded) {
    //         toggleDrawer()
    //     }
    // }, [expanded])

    return (

        <Box position="relative" display="flex" >
            <CssBaseline />
            <Drawer variant="permanent" sx={{ display: { xs: 'none', md: "flex" } }} open={above_1313 ? !open : open}>
                <ScrollBar component="div">
                    <List>
                        <ListItem button key={'Nearby'}>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Nearby'} />
                        </ListItem>
                        <ListItem button key={'Wishlist'}>
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Wishlist'} />
                        </ListItem>
                        <ListItem button key={'Filters'} onClick={handleExpandClick}>
                            <ListItemIcon>
                                <FilterAltIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Filters'} />

                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </ListItem>
                        <Collapse in={expanded} timeout="auto" unmountOnExit sx={!open && above_1313 ? { display: "flex" } : open && !above_1313 ? { display: "flex" } : { display: "none" }}>
                            <CardContent>
                                <div>monil</div>
                            </CardContent>
                        </Collapse>
                    </List>
                    {children}
                </ScrollBar>
            </Drawer>
        </Box>


    );
}
