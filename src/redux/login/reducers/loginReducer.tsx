import { Success, loginModel } from '../../../model';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../loginTypes';

const initialState = {
	isAuthenticated: localStorage.getItem('authApp') || false,
	user: { email: 'user@gmail.com', pass: 'asdf' },
};

//Reducers

const authReducer = (state: loginModel = initialState, action: Success) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('authApp', true as any);
			return {
				...state,
				isAuthenticated: true,
			};
		case LOGOUT_SUCCESS:
			localStorage.setItem('authApp', false as any);
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};

export default authReducer;
