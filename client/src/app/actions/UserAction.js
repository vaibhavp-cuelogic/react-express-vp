import * as actionTypes from "../constants/actionTypes";
import * as Config from "Config";
import "isomorphic-fetch";

export const loginClicked = (payload) => {
    return dispatch => {

        dispatch({
            type: actionTypes.LOGIN_ATTEMPTED
        });

        return fetch(
            Config.apiUrl + "/signin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": payload.email,
                    "password": payload.password
                })
            }).then((response) => {
                 return response.json();
            })
              .then((data) => { 
                  return new Promise((resolve, reject) => {
                    if (data.status === true) {
                        dispatch({
                            type: actionTypes.AUTH_SUCCESS,
                            payload: data.user
                        });
                    } else {
                        dispatch({
                            type: actionTypes.AUTH_FAILED,
                            payload: data.user
                        });
                    }
                    resolve();
                 });
            
            });
    };
}
export const signupClicked = (payload) => {
    return dispatch => {
        console.log(payload);
        dispatch({
            type: actionTypes.SIGNUP_ATTEMPTED
        });

        return fetch(
            Config.apiUrl + "/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then((response) => {
              return response.json();
            })
             .then((data) => {  
                  return new Promise((resolve, reject) => {
                    if (data.status === true) {
                        dispatch({
                            type: actionTypes.SIGNUP_SUCCESS,
                            payload: data.user
                        });
                    } else {
                        dispatch({
                            type: actionTypes.SIGNUP_FAILED,
                            payload: data.user
                        });
                    }
                    resolve();
                 });
            });
    };
}