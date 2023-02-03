import { R_SUCESS,R_Fail } from "../constants/restaurentsConstants";

// reducer function
export const restaurantListReducer=(state={restaurantList:[]},action)=>{

    switch(action.type){
        case R_SUCESS:
            return {restaurantList:action.payload}
           
         case R_Fail:
            return {restaurantList:action.error}   

         default:
            return state   
    }
}