import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BestSelling from '../base-plans/BestSelling';
import BestServicing from '../base-plans/BestServicing';

class BasePlans extends Component {
    render() {
        return (
            <div className="row base-plan-section cus-ml0">
                <h3>Base Plans(3)</h3>
                <BestSelling></BestSelling>
                <BestServicing></BestServicing>
                <BestServicing></BestServicing>
                <h3>Topup Plans(1)</h3>
                <BestServicing></BestServicing>
            </div>
        );
    }
}
export default BasePlans;

