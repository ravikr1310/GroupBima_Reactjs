import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Filter extends Component {
    render() {
        return (
            <div className="row sort-result">
                <div className="col-md-1">
                    <span className="label-head">Sort by:</span>
                    <span className="lbl-sorter"><a href="#">Premium !</a></span>
                </div>
                <div className="saperator"></div>
                <div className="col-md-2">
                    <span className="label-head">Modify cover:</span>
                    <span className="lbl-sorter"><a href="#">1 lack 20 lack</a></span>
                </div>
                <div className="col-md-9 text-right pull-right width74">
                    <button className="btn btn-default btn-filter">Filter</button>
                </div>
            </div>
        );
    }
}

export default Filter;