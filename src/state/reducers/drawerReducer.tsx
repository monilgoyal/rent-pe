import { drawerAction } from "../action-creator/actionType"
const IsOpen = (state = false, action: { type: string }) => {
    return action.type === drawerAction ? !state : state
}

export default IsOpen;