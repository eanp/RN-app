import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    DELETE_STORE_TOKEN,
} from '../actionTypes'

export const login = () => {
    return (dispatch, getState) => {
        dispatch({ type: LOGIN_REQUEST })
        // hit api
        let data = {token:"123124121"}

        dispatch({ type: LOGIN_SUCCESS, payload: data })
    }
}