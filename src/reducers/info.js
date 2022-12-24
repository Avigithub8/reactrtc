import {
    GET_INFO_FAIL,
    GET_INFO_REQUEST,
    GET_INFO_SUCCESS,
} from '../constants'

const initialState = {
    // appId: '97684',
    // authKey: 'KdMMfhWLKdrXqyN',
    // authSecret: 'F8QtezG3QHRTw8c',
    // accountKey: 'JLQ7ZEsu4Ky9bCqXy3ce',
    // // apiEndpoint: '',
    // // chatEndpoint: '',
    // sdkVersion: '^0.6.0-beta',
    appId: '',
    authKey: '',
    authSecret: '',
    accountKey: '',
    apiEndpoint: '',
    chatEndpoint: '',
    sdkVersion: '',
    error: '',
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO_REQUEST: return { ...state, error: '', loading: true }
        case GET_INFO_SUCCESS: return { ...state, ...action.payload, loading: false }
        case GET_INFO_FAIL: return { ...state, error: action.error, loading: false }
        default: return state
    }
}
