import * as TypeOfColor from './type'
import axios from "axios"

export function callAPIOfColor(){
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            dispatch(showColor("#"+response.data.new_color));
        })

    }
}

export function showColor(color){
    return{
        type: TypeOfColor.GET_API_FOR_COLOR,
        payload: color
    }
}

