import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BestSellingBillPayment extends Component {
    render() {
        return (
            <div className="col-md-2 cus-plr0 pobill">
                <p>You pay of bill</p>
                <p><span className="rs">20%</span> for 60-64 yrs</p>
                <p><span className="rs">25%</span> for 65-69 yrs</p>
            </div>
        );
    }
}

export default BestSellingBillPayment;