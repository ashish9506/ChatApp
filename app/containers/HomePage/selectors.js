import { createSelector } from "reselect"
import {initialState} from "./reducer"
const selector=state=>state.data || initialState

const stateDataSelector=()=> createSelector(
    selector,
    substate=>substate
)

export default stateDataSelector
export {stateDataSelector}