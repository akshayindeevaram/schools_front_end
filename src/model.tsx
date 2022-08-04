// import { type } from "@testing-library/user-event/dist/type";

export interface dataModelNav {
	name: string;
	path: string;
}
export type dataModelFeat = {
	img: string;
	title: string;
	description: string;
};

export type dataModelAbout = {
	main_heading: string;
	description: string;
};

export interface navModel {
	error: string;
	loading: boolean;
	nav: dataModelNav[];
}

export type featModel = {
	loading: boolean;
	error: string;
	feat: dataModelFeat[];
};

export type aboutModel = {
	loading: boolean;
	error: string;
	about: dataModelAbout[];
	// reducer:any;
};

export interface loginModel {
	isAuthenticated: string | boolean;
	user: { email: string; pass: string };
}
export type reduxModel = {
	reducer: any;
	nav: navModel;
	feat: featModel;
	about: aboutModel;
};

export type Actions =
	| { type: 'FETCH_FEAT_REQUEST'; payload: { loading: boolean } }
	| { type: 'FETCH_FEAT_SUCCESS'; payload: { Features: dataModelFeat[] } }
	| { type: 'FETCH_FEAT_FAILURE'; payload: { error: string } }
	| { type: 'FETCH_ABOUT_REQUEST'; payload: { loading: boolean } }
	| { type: 'FETCH_ABOUT_SUCCESS'; payload: { Features: dataModelAbout[] } }
	| { type: 'FETCH_ABOUT_FAILURE'; payload: { error: string } }
	| { type: 'FETCH_ABOUT_DATA'; payload: { error: string } }
	| { type: 'FETCH_NAV_REQUEST' }
	| { type: 'FETCH_NAV_SUCCESS'; payload: { Nav: dataModelNav[] } }
	| { type: 'FETCH_NAV_FAILURE'; payload: { error: string } };

// export type Success=
// { type: "LOGIN_SUCCESS"; payload: { isAuthenticated: boolean } };
// { type: "LOGOUT_SUCCESS"; payload: { isAuthenticated: boolean } };

export type Success =
	| { type: 'LOGIN_SUCCESS'; isAuthenticated: boolean }
	| { type: 'LOGOUT_SUCCESS'; isAuthenticated: boolean };
