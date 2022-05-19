import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';
import { easing, useMediaQuery, useScrollTrigger } from '@mui/material';
import { Slide } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../state';
import { RootState } from "../../state/reducers";

interface Props {
    children: React.ReactElement
}
function HideOnScroll({ children }: Props) {
    const above_900 = useMediaQuery('(min-width:900px)');
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction={'up'} in={above_900 || !trigger} easing={{ enter: easing.easeIn, exit: easing.easeIn, }}>
            {children}
        </Slide>

    )
}


export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('');
    const open = useSelector((state: RootState) => state.IsOpen)
    useEffect(() => {
        if (!open) {
            setValue('')
        }
    }, [open])

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const dispatch = useDispatch()
    const toggleDrawer = bindActionCreators(actionCreator.drawerToggle, dispatch)
    return (
        // <HideOnScroll>

        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xm: "block", md: "none" } }}>

            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Filter"
                    value="filter"
                    icon={<FilterAltIcon />}
                    onClick={() => toggleDrawer()}
                />
            </BottomNavigation>
        </Box>
        // </HideOnScroll>
    );
}
