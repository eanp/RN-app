import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    DELETE_STORE_TOKEN,
} from '../actionTypes'

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: payload,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                data: payload,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case DELETE_STORE_TOKEN:
            return {
                ...state,
                data: [],
                token: null,
                isLoading: false,
                isError: false,
                isSuccess: true
            }

        default:
            return state
    }
}

export default auth