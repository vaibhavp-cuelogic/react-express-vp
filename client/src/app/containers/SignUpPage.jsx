import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import { SignUpForm } from "../components/user/SignUpForm";

import { signupClicked } from "../actions/UserAction.js";

export class SignUpPage extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName:"",
            lastName:"",
            email : "",
            password : "",
            confirmPassword:""
        }
    }
    
    onSingUpClicked = () => {
        //console.log([...this.state]);
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.confirmPassword) {
          //if ([...this.state].length > 0) {
            this.props.userSignUp(this.state);
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
                <SignUpForm changeHandler={this.onChangeHandle} clickedSignup = {this.onSingUpClicked} />
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
        userSignUp : (payLoad) => {
            dispatch(signupClicked(payLoad));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage) 