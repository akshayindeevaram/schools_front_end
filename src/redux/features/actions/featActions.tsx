import axios from 'axios';
import { dataModelFeat } from '../../../model';
import {
	FETCH_FEAT_FAILURE,
	FETCH_FEAT_REQUEST,
	FETCH_FEAT_SUCCESS,
} from '../featTypes';

export const fetchFeatRequest = () => {
	return {
		type: FETCH_FEAT_REQUEST,
	};
};

export const fetchFeatSuccess = (Features: dataModelFeat) => {
	return {
		type: FETCH_FEAT_SUCCESS,
		payload: Features,
	};
};
export const fetchFeatFailure = (error: string) => {
	return {
		type: FETCH_FEAT_FAILURE,
		payload: error,
	};
};

export const fetchFeat = () => {
	return (dispatch: any) => {
		dispatch(fetchFeatRequest);
		axios

			.get(`${process.env.REACT_APP_JSON_API}features`)
			// .get(process.env.REACT_APP_API)

			.then((response) => {
				const feat = response.data;

				dispatch(fetchFeatSuccess(feat));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchFeatFailure(errorMsg));
			});
	};
};
