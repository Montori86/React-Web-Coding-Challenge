import {GET_STOLEN_BIKES, GET_STOLEN_COUNT, GET_DETAILS} from "./actions.js"


const initialState = {
    bikes: [],
    count: {},
    detail: {},
}

export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_STOLEN_BIKES:
            return {
                ...state,
                bikes: action.payload,
            }
        case GET_STOLEN_COUNT:
            return {
                ...state,
                count: action.payload,
            }
        case GET_DETAILS:
                return {
                    ...state,
                    detail: action.payload,
                }
         default:
                return state;
    }
}