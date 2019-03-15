import {GET_EXCELLENT_LOG} from "../constants/Action-Types";

const excLog = (state = [], action) => {
  switch (action.type) {
    case GET_EXCELLENT_LOG:
      return action.excLog
    default:
      return state
  }
}
export default excLog
