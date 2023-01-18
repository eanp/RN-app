import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    DELETE_STORE_TOKEN,
} from '../actionTypes'

export const login = () => {
    return (dispatch, getState) => {
        dispatch({ type: LOGIN_REQUEST })
        
        let data = {            
            token : "12345678"
        }

        dispatch({ type: LOGIN_SUCCESS, payload: data })
    }
}