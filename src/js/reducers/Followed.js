import {GET_FOLLOWED_USER} from "../constants/Action-Types";

const followed =  (state = [], action) => {
  switch (action.type) {
    case GET_FOLLOWED_USER:
      return action.followed
    default:
      return state
  }
}
export default followed