import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BuyPlan extends Component {
    render() {
        return (
            <div className="col-md-3 by-plan">
                <button className="btn btn-default btn-buyplanbtn"><span>Buy Plan</span><br />
                    <span>Rs. 6,778 <span>/year</span></span></button>
                <p><a href="#">Policy Details</a></p>
            </div>
        );
    }
}

export default BuyPlan;