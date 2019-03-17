import { GET_LOG } from '../constants/Action-Types'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'

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

export const updateLog = (id, log,user_id) => {
  return dispatch => {
    (async () => {
      const res = await request.update(`/api/logs/${id}`, log)
      if (res.status === HTTP.NO_CONTENT) {
        dispatch(getPageLogs(0,user_id))
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
      const res = await request.get(`/api/logs?page=${page}&id=${user_id}`)
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_LOG,
          log: res.body
        })
      }
    })()
  }
}


