import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GaneshIcon from '../../assets/images/ganesh-icon.png';

class BottomFooter extends Component {
    render() {
        return (

            <div className="row bottom-footer cus-mlr0">
                <div className="col-xs-12 col-md-6 copyright">
                    <p>©2018-All Rights Reserved Groupfit Insurance Brokers Private Limited</p>
                </div>
                <div className="col-xs-12 col-md-6 footer-social-link">
                    <ul className="pull-right">
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
                        <li><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                        <li><i className="fa fa-caret-square-o-right" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>

        );
    }
}
export default BottomFooter;

