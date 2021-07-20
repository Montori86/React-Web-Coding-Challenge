import axios from 'axios';
export const GET_STOLEN_BIKES = "GET_STOLEN_BIKES";




const baseUrl = "https://bikeindex.org:443/api/v3/search?page=1&per_page=50&location=Berlin&distance=10&stolenness=proximity";



export function getStolenBikes (){
    return async (dispatch) => {
        const requestApi = await axios.get(baseUrl);
     
        dispatch({
            type: "GET_STOLEN_BIKES",
            payload: requestApi.data
        })
    }
}