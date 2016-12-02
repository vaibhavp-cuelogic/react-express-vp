import React , { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import { SignInForm } from "../components/user/SignInForm";

import { loginClicked } from "../actions/UserAction.js";

export class SignInPage extends React.Component {
    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        }
    }
    
    onLoginClicked = () => {
        if (this.state.email && this.state.password) {
            this.props.userLogin(this.state);
        }
    }
    
    onChangeHandle = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    
    render(){
        return (
            <div className="container">
                <SignInForm changeHandler={this.onChangeHandle} clickedLogin = {this.onLoginClicked} />
            </div>    
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin : (email) => {
            dispatch(loginClicked(email));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignInPage)