import * as TypeOfColor from "../Action/colorAction/type";

const initState={
    color:"blue"
}
 

export default function(state=initState, {type, payload}){


    switch (type){
        case TypeOfColor.GET_API_FOR_COLOR:
            console.log("This is the payload:", payload)
            return{
                ...state,
                color:payload      
            }
        
            default:
                return state;
    }
}