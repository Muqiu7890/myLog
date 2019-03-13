import { GET_LOG, GET_FOLLOWED_LOG } from '../constants/Action-Types'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'

// export const getLogs = (userId) => {
//   return dispatch => {
//     (async () => {
//       const res = await request.get(`/api/logs/${userId}`)
//       if (res.status === HTTP.OK) {
//         dispatch({
//           type: GET_FOLLOWED_LOG,
//           logs: res.body
//         })
//       }
//     })()
//   }
// }

export const addLog = (log) => {
  return dispatch => {
    (async () => {
      const res = await request.post('/api/logs', log)
      if (res.status === HTTP.CREATED) {
        dispatch(getPageLogs())
      }
    })()
  }
}

export const updateLog = (id, log) => {
  return dispatch => {
    (async () => {
      const res = await request.update(`/api/logs/${id}`, log)
      if (res.status === HTTP.NO_CONTENT) {
        dispatch(getPageLogs())
      }
    })()
  }
}

export const deleteLog = (id) => {
  return dispatch => {
    (async () => {
      const res = await request.del(`/api/logs/${id}`)
      if (res.status === HTTP.NO_CONTENT) {
        dispatch(getPageLogs())
      }
    })()
  }
}

export const getPageLogs = (page = 0, user_id = 6) => {
  return dispatch => {
    (async () => {
      const res = await request.get(`/api/logs/${user_id}?page=${page}`)
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_LOG,
          log: res.body
        })
      }
    })()
  }
}


