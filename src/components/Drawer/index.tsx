import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import DesktopDrawer from './DesktopDrawer';
import MobileDrawer from './MobileDrawer';

const DrawerContent = () => {
    return (
        <>
            <Divider />

        </>
    )
}
function Drawer() {
    return (
        <>
            <DesktopDrawer>
                <DrawerContent />
            </DesktopDrawer>
            <MobileDrawer>
                <DrawerContent />
            </MobileDrawer>
        </>
    )
}

export default Drawer
