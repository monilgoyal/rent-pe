import { combineReducers } from 'redux'
import IsDark from "./themeReducer"
import IsOpen from './drawerReducer'
const reducers = combineReducers({
    IsDark, IsOpen
})
export type RootState = ReturnType<typeof reducers>
export default reducers