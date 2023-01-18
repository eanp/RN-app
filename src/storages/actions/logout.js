import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    DELETE_STORE_TOKEN,
} from '../actionTypes'

export const logout = () => {
    return (dispatch, getState) => {
        dispatch({ type: DELETE_STORE_TOKEN })
    }
}