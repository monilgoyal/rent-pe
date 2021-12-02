import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import DesktopDrawer from './DesktopDrawer';
import MobileDrawer from './MobileDrawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const DrawerContent = () => {
    return (
        <>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
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
