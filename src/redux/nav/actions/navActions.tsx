import axios from 'axios';
import { dataModelNav } from '../../../model';
// import Nav from "../../../component/nav/Nav";
import {
	FETCH_NAV_REQUEST,
	FETCH_NAV_SUCCESS,
	FETCH_NAV_FAILURE,
} from '../navTypes';

export const fetchNavRequest = () => {
	return {
		type: FETCH_NAV_REQUEST,
	};
};
export const fetchNavSuccess = (Nav: dataModelNav) => {
	return {
		type: FETCH_NAV_SUCCESS,
		payload: Nav,
	};
};
export const fetchNavFailure = (error: string) => {
	return {
		type: FETCH_NAV_FAILURE,
		payload: error,
	};
};

export const fetchNav = () => {
	return function (dispatch: any) {
		dispatch(fetchNavRequest);
		axios
			.get(`${process.env.REACT_APP_JSON_API}nav`)

			.then((response) => {
				const nav = response.data;
				dispatch(fetchNavSuccess(nav));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchNavFailure(errorMsg));
			});
	};
};
