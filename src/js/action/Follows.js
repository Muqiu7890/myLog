import { GET_USER,GET_FOLLOWED_USER } from '../constants/Action-Types'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'

export const getUsers = () => {
  return dispatch => {
    (async () => {
      const res = await request.get('/api/users')
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_USER,
          users: res.body
        })
        //console.log('1user',res.body)
      }
    })()
  }
}

export const getAllFollowedUsers = () => {
  return dispatch => {
    (async () => {
      const res =await request.get(`api/users/6`)
      if (res.status === HTTP.OK){
        dispatch({
          type: GET_FOLLOWED_USER,
          followed: res.body
        })
        console.log(res.body)
      }
    })()
  }

}