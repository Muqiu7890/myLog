import log from './Log'
import followed from './Followed'
// <<<<<<< HEAD
// import { combineReducers } from 'redux'
import user from './User'

// export default combineReducers({
//   log,
//   followed,
//   user
// =======
import excLog from './Excellent-Log'

import {combineReducers} from "redux";


export default combineReducers({
    log,
    followed,
    excLog,
    user


// >>>>>>> add excellent
})