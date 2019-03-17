import * as request from '../constants/Fetch-Request'
import HTTP from '../constants/Http-Code'
import { GET_EXCELLENT_LOG } from '../constants/Action-Types'

export const getExcellentLog = (page = 0, exc = 1) => {
  return dispatch => {
    (async () => {
      const res = await request.get(`api/exclogs?page=${page}&id=${exc}`)
      if (res.status === HTTP.OK) {
        dispatch({
          type: GET_EXCELLENT_LOG,
          excLog: res.body,
        })
      }
    })()
  }
}