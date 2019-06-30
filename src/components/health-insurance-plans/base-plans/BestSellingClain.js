import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BestSellingClaim extends Component {
    render() {
        return (
            <div className="col-md-4 cus-plr0 claim-sec">
                <ul>
                    <li>Claim Settelment <span>97%</span></li>
                    <li>Maternity cover waiting time <span>6 Months</span></li>
                    <li>Existing Disease afer <span>2 Years</span></li>
                    <li className="arror-pos"><a href="#">Show all</a><span className="tri-down-arrow"></span></li>
                </ul>
            </div>
        );
    }
}

export default BestSellingClaim;