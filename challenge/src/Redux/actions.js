import axios from 'axios';
export const GET_STOLEN_BIKES = "GET_STOLEN_BIKES";
export const GET_STOLEN_COUNT = "GET_STOLEN_COUNT";
export const GET_DETAILS = "GET_DETAILS"



const baseUrl = "https://bikeindex.org:443/api/v3/search?page=1&per_page=50&location=Berlin&distance=10&stolenness=proximity";
const stolenUrl = "https://bikeindex.org:443/api/v3/search/count?location=Berlin&distance=10&stolenness=proximity"


export function getStolenBikes (){
    return async (dispatch) => {
        const requestApi = await axios.get(baseUrl);
     
        dispatch({
            type: "GET_STOLEN_BIKES",
            payload: requestApi.data
        })
    }
}

export function getSlotenCount (){
    return async (dispatch) => {
        const requestApi = await axios.get(stolenUrl);
     
        dispatch({
            type: "GET_STOLEN_COUNT",
            payload: requestApi.data
        })
    }
}

export function getDetails (id){
    return async (dispatch) => {
        const requestApi = await axios.get(`https://bikeindex.org:443/api/v3/bikes/${id}`);
    
        dispatch({
            type: "GET_DETAILS",
            payload: requestApi.data
        })
    }
}