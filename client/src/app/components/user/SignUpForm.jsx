import React, { PropTypes } from "react";
import { render } from "react-dom";


export const SignUpForm = (props) => {
        return (
                <div>
                    <div className="form-group">
                      <label htmlFor="exampleInputFirstName">First Name</label>
                      <input onChange={props.changeHandler} type="text" name="firstName"  className="form-control" id="exampleInputFirstName" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputLastName">Last Name</label>
                      <input onChange={props.changeHandler} type="text" name="lastName"  className="form-control" id="exampleInputLastName" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input onChange={props.changeHandler} type="email" name="email"  className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input onChange={props.changeHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputConfirmPassword">Confirm Password</label>
                      <input onChange={props.changeHandler} name="confirmPassword" type="password" className="form-control" id="exampleInputConfirmPassword" placeholder="Confirm Password"/>
                    </div>
                    <button onClick={props.clickedSignup} type="submit" className="btn btn-default">Submit</button>
                </div>
            
        );
}

SignUpForm.propTypes = {
  changeHandler : PropTypes.func,
  clickedSignup : PropTypes.func
};