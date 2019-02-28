import { GET_LOG, } from '../constants/Action-Types'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'

// export const getLogs = () => {
//   return dispatch => {
//     (async () => {
//       const res = await request.get('/api/logs')
//       if (res.status === HTTP.OK) {
//         dispatch({
//           type: GET_LOG,
//           log: res.body
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

export const getPageLogs = (page = 0) => {
  return dispatch => {
    (async () => {
      const res = await request.get(`/api/logs/6?page=${page}`)
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_LOG,
          log: res.body
        })
      }
    })()
  }
}

