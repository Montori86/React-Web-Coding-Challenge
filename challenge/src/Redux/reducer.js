import {GET_STOLEN_BIKES} from "./actions.js"


const initialState = {
    bikes: [],
}


export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_STOLEN_BIKES:
            return {
                ...state,
                bikes: action.payload,
            }

         default:
                return state;
    }
}