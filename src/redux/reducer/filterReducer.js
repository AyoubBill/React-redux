import {SET_FILTER} from "../actionsTypes"
import VISIBILITY_FILTER from "../../constants"

const initialeState = VISIBILITY_FILTER.ALL

const filterReducer = (state=initialeState, action) => {
    switch(action.type) {
        case SET_FILTER: {
            return action.payload.filter
        }
        default: {
            return state
        }
    }
}

export default filterReducer
