import {ADD_LOG , DELETE_LOG } from '../constants/Action-Types'
export const addLog = (log) => (
    {
        type: ADD_LOG,
        log
    }
)
export const deleteLog = (id) => (
    {
        type: DELETE_LOG,
        id
    }
)
