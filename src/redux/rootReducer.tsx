import {combineReducers} from "redux"
import navReducer from "./nav/reducers/navReducer"
import featReducer from "./features/reducers/featReducer"
import authReducer from "./login/reducers/loginReducer"
import aboutReducer from "./about/reducers/aboutReducer"

const rootReducer = combineReducers({
    nav:navReducer,
    feat:featReducer,
    login:authReducer,
    about:aboutReducer,
})

export default rootReducer