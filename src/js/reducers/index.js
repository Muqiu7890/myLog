import log from './Log'
import followed from './Followed'
import user from './User'
import excLog from './Excellent-Log'
import { combineReducers } from 'redux'

export default combineReducers({
  log,
  followed,
  excLog,
  user
})