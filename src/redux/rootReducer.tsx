import {combineReducers} from "redux"
import navReducer from "./nav/reducers/navReducer"
import featReducer from "./features/reducers/featReducer"
import authReducer from "./login/reducers/loginReducer"

const rootReducer = combineReducers({
    nav:navReducer,
    feat:featReducer,
    login:authReducer,
})

export default rootReducer