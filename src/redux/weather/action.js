import axios from "axios"
import { RECEIVE_ERROR_WEATHER, RECEIVE_RESPONSE_WEATHER, SEND_REQUEST_WEATHER } from "./type"

const sendRequestWeather=()=>{
    return {
        type: SEND_REQUEST_WEATHER
    }
}

const receiveResponseWeather=(data)=>{
    return {
        type: RECEIVE_RESPONSE_WEATHER,
        payload: data
    }
}

const receiveErrorWeather=(data)=>{
    return {
        type: RECEIVE_ERROR_WEATHER,
        payload: data
    }
}

export const getWeatherInfo=(query)=>{
    return dispatch=>{
        dispatch(sendRequestWeather());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${query[0]}&lon=${query[1]}&units=metric&appid=d11bfa265c39df1e81b658520d25831b`)
        .then(res=>{
            dispatch(receiveResponseWeather(res.data))
        }).catch(error=>{
            dispatch(receiveErrorWeather(error))
        })
    }
}