import {GET_LOG} from "../constants/Action-Types";

const init = {
    content: [],
    totalElements: ''
}

export default (state = init, action) => {
    switch (action.type) {
        case GET_LOG:
            return action.log
        default:
            return state
    }
}