import {ADD_LOG} from '../constants/Action-Types'
import {DELETE_LOG} from "../constants/Action-Types";

const initialState = {
    logs: []
}



export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOG: {
            let newState = JSON.parse(JSON.stringify(state))
            newState.logs.push(action.log)
            console.log(action.log)
            return newState
        }
        case DELETE_LOG: {

        }
        default:
            return state

    }
}