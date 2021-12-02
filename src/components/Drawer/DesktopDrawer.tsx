
import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { RootState } from '../../state/reducers';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;
export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

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
    const laptop = useMediaQuery('(min-width:1313px)');
    const open = useSelector((state: RootState) => state.IsOpen)
    return (
        <Box zIndex={-1} position="relative" display="flex">
            <CssBaseline />
            <Drawer variant="permanent" sx={{ display: { xs: 'none', md: "flex" } }} open={laptop ? !open : open}>
                <DrawerHeader />
                {children}
            </Drawer>
        </Box>


    );
}
