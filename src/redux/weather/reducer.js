import { RECEIVE_ERROR_WEATHER, RECEIVE_RESPONSE_WEATHER, SEND_REQUEST_WEATHER } from "./type"

const init = {
    data: {},
    error: '',
    loading: false
}
const weatherReducer = (state=init, action) => {
    switch (action.type){
        case SEND_REQUEST_WEATHER:
            return {...state, loading:true}
        case RECEIVE_RESPONSE_WEATHER:
            return {loading:false, data:action.payload, error: ''}
        case RECEIVE_ERROR_WEATHER:
            return {loading:false, data:{}, error: action.payload}
        default:
            return state
    }
}

export default weatherReducer;