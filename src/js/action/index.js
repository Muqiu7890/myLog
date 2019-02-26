import {GET_LOG} from '../constants/Action-Types'
import * as request from  '../constants/mark'



export const getLogs = () => {
    return dispatch => {
        (async () => {
            const res= await request.get('/api/logs')
            if (res.status === 200) {
                dispatch({
                    type: GET_LOG,
                    log: res.body
                })
            }
        })()
    }
}

// export const deleteLog = (id) => ({type: DELETE_LOG, id})
