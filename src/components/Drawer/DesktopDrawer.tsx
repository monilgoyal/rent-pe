
import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { RootState } from '../../state/reducers';
import { useSelector } from 'react-redux';
import { Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

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

export default function DesktopDrawer({ children }) {
    const above_1313 = useMediaQuery('(min-width:1313px)');
    const open = useSelector((state: RootState) => state.IsOpen)
    return (

        <Box position="relative" display="flex" >
            <CssBaseline />
            <Drawer variant="permanent" sx={{ display: { xs: 'none', md: "flex" } }} open={above_1313 ? !open : open}>
                <ScrollBar component="div">
                    <List>
                        <ListItem button key={'Recent'}>
                            <ListItemIcon>
                                <RestoreIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Recent'} />
                        </ListItem>
                        <ListItem button key={'Favorites'}>
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Favorites'} />
                        </ListItem>
                        <ListItem button key={'Nearby'}>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Nearby'} />
                        </ListItem>
                        <ListItem button key={'Folder'}>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Folder'} />
                        </ListItem>
                    </List>
                    {children}
                </ScrollBar>
            </Drawer>
        </Box>


    );
}
