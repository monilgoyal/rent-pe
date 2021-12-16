import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';
import { easing, useMediaQuery, useScrollTrigger } from '@mui/material';
import { Slide } from '@mui/material';

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
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        // <HideOnScroll>

        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xm: "block", md: "none" } }}>

            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon />}
                />
            </BottomNavigation>
        </Box>
        // </HideOnScroll>
    );
}
