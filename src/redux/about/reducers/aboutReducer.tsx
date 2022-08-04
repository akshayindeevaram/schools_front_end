import { Actions, aboutModel } from '../../../model';
import {
	FETCH_ABOUT_FAILURE,
	FETCH_ABOUT_REQUEST,
	FETCH_ABOUT_SUCCESS,
} from '../aboutTypes';

const initialState = {
	loading: false,
	about: [],
	error: '',
};

const reducer = (state: aboutModel = initialState, action: Actions) => {
	switch (action.type) {
		case FETCH_ABOUT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ABOUT_SUCCESS:
			return {
				...state,
				loading: false,
				about: action.payload,
				error: '',
			};
		case FETCH_ABOUT_FAILURE:
			return {
				loading: false,
				about: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
