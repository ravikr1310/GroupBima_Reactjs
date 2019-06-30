import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BestSellingHead from '../../../assets/images/best-selling.png';
import AddToCompare from '../base-plans/AddToCompare';
import HealthTotalSuperior from '../base-plans/HealthTotalSuperior';
import BuyPlan from '../base-plans/BuyPlan';
import OffersPlan from '../base-plans/OfferPlans';

class BestSelling extends Component {
    render() {
        return (

            <div className="row base-row">
                <img className="best-sel" src={BestSellingHead} alt="" />
                <AddToCompare></AddToCompare>
                <HealthTotalSuperior></HealthTotalSuperior>
                <BuyPlan></BuyPlan>
                <OffersPlan></OffersPlan>
            </div>

        );
    }
}
export default BestSelling;

