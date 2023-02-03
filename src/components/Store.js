import { createStore , combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "../reducer/restaurantReducer";



// to create reducer
const reducers = combineReducers({

    restaurentReducer:restaurantListReducer
    
})

// to create Middleware
const middleware = [thunk]

// to create store
const store = createStore(reducers,applyMiddleware(...middleware))


export default store