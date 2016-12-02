import React, { Component } from "react";
import { render } from "react-dom";


export default class Navbar extends React.Component {
    
    render(){
        return (
            <nav className = "navbar navbar-default">
                <div className = "container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/signup">Signup</a></li>
                            <li><a href="/signin">Login</a></li>
                            <li><a href="/signout">Logout</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>  
        );
    }
}