import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Help extends Component {
    render() {
        return (
            <div className="row row-1">
                <div className="col-md-2">
                    <span>Insurer</span>
                    <span className="ques">?</span>
                </div>
                <div className="col-md-2">
                    <span>Cover</span>
                    <span className="ques">?</span>
                </div>
                <div className="col-md-2">
                    <span>You pay of bill</span>
                    <span className="ques">?</span>
                </div>
                <div className="col-md-2">
                    <span>Cashless</span>
                </div>
                <div className="col-md-2">
                    <span>Key Details</span>
                    <span className="ques">?</span>
                </div>
                <div className="col-md-2">
                    <span>Premium</span>
                    <span className="ques">?</span>
                </div>
            </div>
        );
    }
}

export default Help;