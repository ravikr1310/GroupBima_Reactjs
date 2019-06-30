import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InsuranceProduct from '../../../assets/images/insurance-1.png';

class AddToCompare extends Component {
    render() {
        return (
            <div className="col-md-2">
                <img src={InsuranceProduct} alt="Insurance" />
                <div className="add-to-compare">
                    <label for="addtoc">
                        <input type="checkbox" id="addtoc" />
                        Add to Compare
                </label>
                </div>
            </div>
        );
    }
}

export default AddToCompare;