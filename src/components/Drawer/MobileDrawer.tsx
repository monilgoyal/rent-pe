import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../state";
import DrawerToggler from "../AppBar/DrawerToggler";
import { Grid, styled, Typography, useMediaQuery } from "@mui/material";
import Link from 'next/link'
import Toolbar from '@mui/material/Toolbar';
import ThemeToggler from "../AppBar/ThemeToggler";

const ToolBar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'initial' : '#673ab7'
}))
export default function MobileDrawer({ children }) {
    const IsTouch = useMediaQuery('(min-width:900px)');
    const open = useSelector((state: RootState) => state.IsOpen)
    const dispatch = useDispatch()
    const toggleDrawer = bindActionCreators(actionCreator.drawerToggle, dispatch)
    return (
        <SwipeableDrawer
            open={!IsTouch && open}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            sx={{ display: { xs: 'flex', md: 'none', overflowX: "hidden" } }}
        >
            <ToolBar >
                <DrawerToggler />
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color="white"
                        >
                            <Link href="/">Online Store</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <ThemeToggler />
                    </Grid>
                </Grid>


            </ToolBar>
            <Box
                sx={{ width: 300 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >

                {children}
            </Box>
        </SwipeableDrawer>
    );
}