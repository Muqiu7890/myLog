import HTTP from '../constants/Http-Code'
import * as request from '../constants/Fetch-Request'
import { GET_USER } from '../constants/Action-Types'

export const getUser = (userId) => {
  return dispatch => {
    (async () => {
      const res = await request.get(`/api/users/${userId}`)
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_USER,
          user: res.body
        })
      }
    })()
  }
}