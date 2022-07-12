import { Actions, navModel } from "../../../model";
import {
    FETCH_NAV_FAILURE,
    FETCH_NAV_REQUEST,
    FETCH_NAV_SUCCESS,
  } from "../navTypes";
  
  const initialState = {
    loading: false,
    nav: [],
    error: "",
  };
  
  const reducer = (state:navModel = initialState, action:Actions) => {
    switch (action.type) {
      case FETCH_NAV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_NAV_SUCCESS:
        return {
          ...state,
          loading: false,
          nav: action.payload,
          error: "",
        };
      case FETCH_NAV_FAILURE:
        return {
          loading: false,
          nav: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  