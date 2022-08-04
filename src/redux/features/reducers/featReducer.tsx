import { Actions, featModel } from '../../../model';
import {
	FETCH_FEAT_FAILURE,
	FETCH_FEAT_REQUEST,
	FETCH_FEAT_SUCCESS,
} from '../featTypes';

const initialState = {
	loading: false,
	feat: [],
	error: '',
};

const reducer = (state: featModel = initialState, action: Actions) => {
	switch (action.type) {
		case FETCH_FEAT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_FEAT_SUCCESS:
			return {
				...state,
				loading: false,
				feat: action.payload,
				error: '',
			};
		case FETCH_FEAT_FAILURE:
			return {
				loading: false,
				feat: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
