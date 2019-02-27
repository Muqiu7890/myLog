import { GET_LOG, } from '../constants/Action-Types'
import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'

export const getLogs = () => {
  return dispatch => {
    (async () => {
      const res = await request.get('/api/logs')
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_LOG,
          log: res.body
        })
      }
    })()
  }
}

export const addLog = (log) => {
  return dispatch => {
    (async () => {
      //console.log(log)
      const res = await request.post('/api/logs', log)
      if (res.status === HTTP.CREATED) {
        dispatch(getLogs())
      }
    })()
  }
}

export const updateLog = (id, log) => {
  return dispatch => {
    (async () => {
      const res = await request.update(`/api/logs/${id}`, log)
      // console.log(res.status)
      if (res.status === HTTP.CREATED) {
        dispatch(getLogs())
      }
    })()
  }
}

export const deleteLog = (id) => {
  return dispatch => {
    (async () => {
      const res = await request.del(`/api/logs/${id}`)
      if (res.status === HTTP.CREATED) {
        dispatch(getLogs())
      }

    })()
  }
}

export const getPages = (page,pageSize) => {
  console.log(page,pageSize)
  return dispatch => {
    (async () => {
      const res = await request.get(`/api/logs?page=${page}`,pageSize)
      if (res.status === HTTP.OK) {
        dispatch(getLogs())
      }
    })()
  }
}

