import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import AppBar from '../components/AppBar'
import Drawer from '../components/Drawer'
import Main from '../components/Main'
import Box from '@mui/material/Box';

export default function Home(): ReactJSXElement {
  return (
    <>
      <AppBar />
      <Box display="flex">
        <Drawer />
        <Main />
      </Box>
    </>

  )
}
