import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import IconButton from '@mui/material/IconButton';
import { actionCreator } from "../../state";
import MenuIcon from '@mui/icons-material/Menu';

function DrawerToggler() {
    const dispatch = useDispatch()
    const toggleDrawer = bindActionCreators(actionCreator.drawerToggle, dispatch)
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer()}
            edge="start"
            sx={{
                marginRight: '16px',
                color: "#fff"
            }}
        ><MenuIcon />
        </IconButton>
    )
}

export default DrawerToggler
