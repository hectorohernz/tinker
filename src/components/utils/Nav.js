import React, { Component } from 'react';

 export default class NavBar extends Component{
    render() {
        return (
            <nav className="nav__default__style">
                 <h1 id="nav__logo">Tinker</h1>
                <div className="nav__btn_container">
                    <button className="nav__btn"><a>Sign Up</a></button>
                    <button className="nav__btn"><a>Log In</a></button>
                </div>

            </nav>
        )
    }
}