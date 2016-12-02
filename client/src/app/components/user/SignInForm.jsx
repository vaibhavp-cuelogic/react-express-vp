import React, { PropTypes } from "react";
import { render } from "react-dom";


export const SignInForm = (props) => {
        return (
                <div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input onChange={props.changeHandler} type="email" name="email"  className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input onChange={props.changeHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button onClick={props.clickedLogin} type="submit" className="btn btn-default">Submit</button>
                </div>
            
        );
}

SignInForm.propTypes = {
  changeHandler : PropTypes.func,
  clickedLogin : PropTypes.func
};