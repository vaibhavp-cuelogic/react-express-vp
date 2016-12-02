import { LOGIN_CLICKED, AUTH_SUCCESS, AUTH_FAILED, LOGIN_ATTEMPTED, SIGNUP_CLICKED, SIGNUP_SUCCESS, SIGNUP_FAILED, SIGNUP_ATTEMPTED } from "../constants/actionTypes.js";

export function userInfo(state = {}, action) {

    switch (action.type) {
        case LOGIN_ATTEMPTED:
        case LOGIN_CLICKED:
            return Object.assign({}, state, {
                fetchingUserDetails: true
            });
        case AUTH_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                fetchingUserDetails: false,
                user: action.payload,
                error: null
            });

        case AUTH_FAILED:
            return Object.assign({}, state, {
                isLoggedIn: false,
                fetchingUserDetails: false,
                error: action.payload,
                user: null
            });
        case SIGNUP_ATTEMPTED:
        case SIGNUP_CLICKED:
            return Object.assign({}, state, {
                fetchingUserDetails: true
            });
            case SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: false,
                fetchingUserDetails: false,
                user: action.payload,
                error: null
            });
             case SIGNUP_FAILED:
            return Object.assign({}, state, {
                isLoggedIn: false,
                fetchingUserDetails: false,
                error: action.payload,
                user: null
            });
        default:
            return state;
    }

}