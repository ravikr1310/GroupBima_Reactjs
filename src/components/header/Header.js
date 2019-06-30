import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../assets/images/logo.png';


class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse custome-navbar">
        <div className="container-fluid container-fluid-custome">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" /></a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown b-bottom">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">More<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li className="b-bottom"><a href="#">Page 1-1</a></li>
                  <li className="b-bottom"><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-3</a></li>
                </ul>
              </li>
              <li className="b-bottom"><a href="#"><i className="fa fa-user-circle" aria-hidden="true"></i> Login</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
