import { GET_FOLLOWED_USER } from '../constants/Action-Types'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'

export const getAllFollowedUsers = () => {
  return dispatch => {
    (async () => {
      const res = await request.get(`api/follows/6`)
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_FOLLOWED_USER,
          followed: res.body
        })
      }
    })()
  }
}

export const cancelFollowedUser = (followed_id) => {
  return dispatch => {
    (async () => {
      const res = await request.del(`api/follows/${followed_id}`)
      if (res.status === HTTP.NO_CONTENT) {
        dispatch(getAllFollowedUsers())
      }
    })()
  }
}

export const addFollowUser = (followed) => {
  return dispatch => {
    (async () => {
      const res = await request.post('/api/follows', followed)
      if (res.status === HTTP.CREATED) {
        dispatch(getAllFollowedUsers())
      }
    })()
  }
}