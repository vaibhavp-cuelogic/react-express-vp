import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import proxyquire from "proxyquire";
import { expect } from "chai";
import nock from "nock";
import * as actionTypes from "../../src/app/constants/actionTypes";

let stubs = {
    'Config': {
        'apiUrl' : "http://localhost:3000/api",
        '@noCallThru': true
    }
}

let actionCreators = proxyquire("../../src/app/actions/UserAction", stubs);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("User Action For Signin", () => {
    let payload;

    before(() => {
        payload = {
            email: "amanjuneja5@gmail.com",
            password: "1234567"
        }
    })

    

    it("returns a function", (done) => {
        let action = actionCreators.loginClicked(payload);
        expect(action).to.be.a('function');
        done();
    });
    it("Dispatches Action LOGIN_ATTEMPTED", (done) => {
        const userInfo = {
            "_id": "583b2bc9b8f7c821130ff8a4",
            "first_name": "Aman",
            "last_name": "Juneja",
            "email": "amanjuneja5@gmail.com",
            "password": "123456",
            "__v": 0
        };
        
        nock("http://localhost:3000/api")
            .defaultReplyHeaders({
                'Content-Type' : "application/json"
            })
            .post("/signin",payload)
            .reply(200,{
                status : true,
                user : userInfo,
            });

        const expectedActions = [
            { type: actionTypes.LOGIN_ATTEMPTED },
            { type: actionTypes.AUTH_SUCCESS, payload: userInfo }
        ]

        const store = mockStore({});
        store.dispatch(actionCreators.loginClicked(payload))
            .then(() => {
                console.log(store.getActions());
                expect(store.getActions()).to.be.equal(expectedActions);
                done();    
            }).catch((error)=>{
                 done(error);
            })
     })
});

describe("User Action For Signup", () => {
    let payload;

    before(() => {
        payload = {
            firstName:"Vaibhav",
            lastName:"Pathak",
            email : "vaibhav.pathak@cuelogic.com",
            password : "12345678",
            confirmPassword:"12345678"
        }
    })

    
    it("returns a function", (done) => {
        let action = actionCreators.signupClicked(payload);
        expect(action).to.be.a('function');
        done();
    });
    it("Dispatches Action SIGNUP_ATTEMPTED", (done) => {
        const userInfo = {
            "_id": "583b2bc9b8f7c821130ff81Z",
            "first_name": "Vaibhav",
            "last_name": "Pathak",
            "email": "vaibhav.pathak@cuelogic.com",
            "password": "12345678",
            "__v": 0
        };
        
        nock("http://localhost:3000/api")
            .defaultReplyHeaders({
                'Content-Type' : "application/json"
            })
            .post("/signup",payload)
            .reply(200,{
                status : true,
                user : userInfo,
            });

        const expectedActions = [
            { type: actionTypes.SIGNUP_ATTEMPTED },
            { type: actionTypes.SIGNUP_SUCCESS, payload: userInfo }
        ]

        const store = mockStore({});
        store.dispatch(actionCreators.signupClicked(payload))
            .then(() => {
                console.log(store.getActions());
                expect(store.getActions()).to.be.equal(expectedActions);
                done();    
            }).catch((error)=>{
                 done(error);
            })
      })
});