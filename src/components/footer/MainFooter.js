import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GaneshIcon from '../../assets/images/ganesh-icon.png';

class MainFooter extends Component {
    render() {
        return (

            <div className="row cus-mlr0">
                <div className="col-md-6 cus-pl0 blank-section">
                    <img src={GaneshIcon} alt="Ganesh" />
                </div>
                <div className="col-md-6 footer-link-section">
                    <ul>
                        <li><a href="#">USEFULL LINKS</a></li>
                        <li><a href="#">Connect with us</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">ISNP</a></li>
                        <li><a href="#">Ligal and Admin Policies</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">Phone number<br />
                            <span>022-49707006</span></a></li>
                        <li><a href="#">Email<br />
                            <span>hello@groupbima.com</span></a></li>
                        <li><a href="#">Business hours<br />
                            <span>Monday - Friday 9 AM - 6 PM</span></a></li>
                    </ul>
                </div>
            </div>

        );
    }
}
export default MainFooter;

