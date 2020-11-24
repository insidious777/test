const initialState = {
    isLoggined:false
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SET_LOGGINED':{
            return {
                ...state,
                isLoggined:action.payload
            }
        }
        default: return state;
    }
    
}