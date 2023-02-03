import axios from "axios";
import { R_SUCESS, R_Fail } from "../constants/restaurentsConstants";
// creating logic


// create a asynchronus function to api call
// + dispatch is given to dispatch the function
export const RestaurentlistAction=()=>async (dispatch) => {
  try {
    const result = await axios.get('/restaurants.json')
    console.log(result.data.restaurants);
    dispatch({
        type : R_SUCESS,
        payload : result.data.restaurants
    })

  } catch(error){
    dispatch({
        type : R_Fail,
        error : error
    })
  }
  
}

