import '../styles/index.scss'
import store from '../state/store';
import { Provider, useDispatch } from 'react-redux';
import { DarkTheme, LightTheme } from '../Theme';
import { ThemeProvider } from '@mui/material';
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";
import { CssBaseline } from '@mui/material';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../state';
import React from 'react';
export const Site = ({ children }) => {
  const isDark = useSelector((state: RootState) => state.IsDark)
  const dispatch = useDispatch()
  const toggleTheme = bindActionCreators(actionCreator.themeToggle, dispatch)
  React.useEffect(() => {
    if (localStorage.getItem('darkMode') === 'ON' && isDark == false) {
      toggleTheme()
    }
  }, [])
  return (
    <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Site >
        <Component {...pageProps} />
      </Site>
    </Provider>
  )
}

export default MyApp
