import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import AppBar from '../components/AppBar'
import Drawer from '../components/Drawer'
import Main from '../components/Main'
import Box from '@mui/material/Box';
import LabelBottomNavigation from '../components/Bottom Navigation';
export default function Home(): ReactJSXElement {
  return (
    <>
      <AppBar />
      <Box display="flex" sx={{ pb: { xs: "35px", md: 0 } }}>
        <Drawer />
        <Main />
      </Box>
      <LabelBottomNavigation />
    </>

  )
}
