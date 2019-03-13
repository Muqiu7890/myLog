import log from './Log'
import followed from './Followed'
import { combineReducers } from 'redux'
import user from './User'

export default combineReducers({
  log,
  followed,
  user
})