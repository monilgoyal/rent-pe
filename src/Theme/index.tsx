import { createTheme } from "@mui/material";
import { deepPurple, amber } from "@mui/material/colors";

const property = {
    primary: {
        main: deepPurple[500],
        light: '#000',
        dark: '#fff',
        contrastText: '#fff'
    },
    secondary: {
        main: amber[500],
        light: '#000',
        dark: '#fff',

        contrastText: deepPurple[500]
    },
}

export const LightTheme = createTheme({
    palette: { ...property, mode: 'light' }
})
export const DarkTheme = createTheme({
    palette: { ...property, mode: 'dark' }
})


