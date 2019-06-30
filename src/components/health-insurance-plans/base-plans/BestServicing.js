import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BestServiceHead from '../../../assets/images/best-service.png';
import AddToCompare from '../base-plans/AddToCompare';
import HealthTotalSuperior from '../base-plans/HealthTotalSuperior';
import BuyPlan from '../base-plans/BuyPlan';
import OffersPlan from '../base-plans/OfferPlans';

class BestServicing extends Component {
    render() {
        return (

            <div class="row base-row best-serving">
                <img className="best-sel" src={BestServiceHead} alt="" />
                <AddToCompare></AddToCompare>
                <HealthTotalSuperior></HealthTotalSuperior>
                <BuyPlan></BuyPlan>
                <OffersPlan></OffersPlan>
            </div>

        );
    }
}
export default BestServicing;

