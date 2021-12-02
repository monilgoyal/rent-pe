import { alpha, IconButton, InputBase, styled } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        paddingRight: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.down('md')]: {
            width: '0ch',
            paddingRight: "0",
            '&:focus': {
                width: `calc(100vw - 312px)`,
                paddingRight: `calc(1em + ${theme.spacing(3)})`,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
            },
            '&:not(:placeholder-shown)': {
                width: `calc(100vw - 312px)`,
                paddingRight: `calc(1em + ${theme.spacing(3)})`,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
            }
        },
        [theme.breakpoints.down('sm')]: {
            '&:focus': {
                width: `calc(100vw - 212px)`,
            },
            '&:not(:placeholder-shown)': {
                width: `calc(100vw - 212px)`,
            }
        },
    },

}));

const SearchBar = () => {
    const searchInput = React.useRef(null)
    const [state, setstate] = React.useState('')
    function clearInput() {
        searchInput.current.click()
        setstate('')
    }
    const ClearButton = (state_prop) => {
        if (state_prop.state !== '') {
            return (

                <IconButton onClick={clearInput} sx={{ position: "absolute", right: "2px", height: "100%" }} color="inherit">
                    <ClearIcon />
                </IconButton>
            )
        }
        return <></>
    }
    return (
        <Search sx={{ width: { md: "30%" }, backgroundColor: { xs: 'transparent', md: 'rgba(255,255,255,0.20)' } }}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                onChange={(event) => setstate(event.target.value)}
                sx={{ width: { md: "100%" } }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={state}
                ref={searchInput}

            />
            <ClearButton state={state} />
        </Search>
    )
}

export default SearchBar
