import {GET_LOG} from "../constants/Action-Types";

export default (state = [], action) => {
    switch (action.type) {
        case GET_LOG:
            return action.log
        default:
            return state
    }
}