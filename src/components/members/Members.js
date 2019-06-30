import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img1 from '../../assets/images/img-1.png';
import img2 from '../../assets/images/img-2.png';

class Members extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-5 header-section">
                    <div className="row">
                        <div className="col-md-4">
                            <span>Members</span>
                            <span><a href="#">Edit</a></span>
                        </div>
                        <div className="col-md-2 cus-pl0">
                            <img className="product-img" src={img1} alt="Img 1" />
                        </div>
                        <div className="col-md-6">
                            <div className="row col2">
                                <div className="col-md-6 cus-pl0">
                                    <p>Self: 24 years</p>
                                    <p>Spouse: 24 years</p>
                                    <p>Son 1: 1 years</p>
                                </div>
                                <div className="col-md-6">
                                    <p>Self: 24 years</p>
                                    <p>Spouse: 24 years</p>
                                    <p>Son 1: 1 years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-5 header-section">
                    <div className="row">
                        <div className="col-md-4">
                            <span>Diseases</span>
                            <span><a href="#">Edit</a></span>
                        </div>
                        <div className="col-md-2 cus-pl0">
                            <img className="product-img" src={img2} alt="Img 1" />
                        </div>
                        <div className="col-md-6">
                            <div className="row col2">
                                <div className="col-md-6 cus-pl0">
                                    <p>Self: 24 years</p>
                                    <p>Spouse: 24 years</p>
                                    <p>Son 1: 1 years</p>
                                </div>
                                <div className="col-md-6">
                                    <p>Self: 24 years</p>
                                    <p>Spouse: 24 years</p>
                                    <p>Son 1: 1 years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-2 right-side-bar">
                    <div className="row">
                        <div className="col-md-6">
                            <span>Details</span>
                            <span><a href="#">Edit</a></span>
                        </div>
                        <div className="col-md-6">
                            <div className="row col2">
                                <div className="col-md-12 cus-pl0">
                                    <p>Self pincode: 123000</p>
                                    <p>Spouse: 24 years</p>
                                    <p>Son 1: 1 years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;