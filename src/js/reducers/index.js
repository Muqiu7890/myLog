import log from './Log'
import followed from './Followed'
import excLog from './Excellent-Log'

import {combineReducers} from "redux";


export default combineReducers({
    log,
    followed,
    excLog
})