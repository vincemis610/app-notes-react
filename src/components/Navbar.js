import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

class Navigation extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Notes
                                <span className="badge badge-pill badge-light ml-1">{this.props.length}</span>
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-nav ml-auto">
                        <img src={logo} className="App-logo" alt="logo" />  
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
