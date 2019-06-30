import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BestSellingHeader from '../base-plans/BestSellingHeader';
import HospitalCover from '../base-plans/BestSellingHospitalCover';
import BestSellingBillPayment from '../base-plans/BestSellingBillPayment';
import BestSellingHospitalLocation from '../base-plans/BestSellingHospitalLocation';
import BestSellingClaim from '../base-plans/BestSellingClain';


class HealthTotalSuperior extends Component {
    render() {
        return (
            <div className="col-md-7 mid">
                <div className="row">
                    <BestSellingHeader></BestSellingHeader>
                    <div className="col-md-12">
                        <div className="row">
                            <HospitalCover></HospitalCover>
                            <div className="saperter1"></div>
                            <BestSellingBillPayment></BestSellingBillPayment>
                            <div className="saperter2"></div>
                            <BestSellingHospitalLocation></BestSellingHospitalLocation>
                            <div className="saperter3"></div>
                            <BestSellingClaim></BestSellingClaim>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HealthTotalSuperior;