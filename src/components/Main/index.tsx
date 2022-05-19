import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
import ResultCard from '../helpers/ResultCard'
import { hostleList } from '../../data/hostels'


function Main() {
    const open = useSelector((state: RootState) => state.IsOpen)
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: { xs: "48px", sm: "64px" } }}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }} >
                {
                    hostleList.map(obj => (
                        <Box sx={open ? { width: { xl: "31%", lg: "30%", md: "45%", sm: "48%", xs: "100%" } } : { width: { xl: "31%", lg: "23%", md: "31%", sm: "48%", xs: "100%" } }} mx={"1%"} key={obj.name}>
                            <ResultCard {...obj} />
                        </Box>

                    ))
                }
            </Box>
        </Box>
    )
}

export default Main
