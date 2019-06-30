import React, { Component } from 'react';
import Star from '../../assets/images/star.png';
import ins2 from '../../assets/images/insurance-2.png';

class ProposerRightSideBar extends Component {
    render() {
        return (

            <div className="col-md-4 right-section pull-right">
                <div className="first-row">
                    <div className="row">
                        <div className="col-md-3 col1"><img src={ins2} alt="" /></div>
                        <div className="col-md-5 col2">
                            <p>Bajaj Allianz health </p>
                            <p>policy package </p>
                            <p>Customers Rating: 4.7 <img src={Star} alt="" /></p>
                            <p>GB Rating: 4.7 <img src={Star} alt="" /></p>
                        </div>
                        <div className="col-md-4 col3 cus-pl0 text-right">
                            <p>Plan Coverage</p>
                            <p>Total Premium </p>
                            <p>Rs. 1,143<span>/year</span></p>
                        </div>
                    </div>
                    <div className="hori-saperator"></div>
                    <p className="policy-header">POLICY TENURE
          </p>
                    <div className="row cus-accordian">
                        <div className="col-md-12">
                            <p>Policy Term -------------------------------------------------------------<span className="pull-right">1
                  Year<span className="glyphicon cusarr">&#xe259;</span></span></p>
                            <p>You can avail discount by increasing your term period</p>
                            <p className="policy-header">ADD ONS</p>
                            <p>Some really long add on name ------------------------------------ <span className="pull-right">Rs.
                  4,546</span></p>
                            <p>Some really long add on name ------------------------------------ <span className="pull-right">Rs.
                  4,546</span></p>
                            <p>Some really long add on name ------------------------------------ <span className="pull-right">Rs.
                  4,546</span></p>
                            <p>Some really long add on name ------------------------------------ <span className="pull-right">Rs.
                  4,546</span></p>
                            <p className="policy-header">PREMIUM</p>
                            <p>Package Premium ------------------------------------ <span className="pull-right">Rs. 4,546</span></p>
                            <p>GST@18% ------------------------------------ <span className="pull-right">Rs. 4,546</span></p>
                            <p>Total Premium ------------------------------------ <span className="pull-right">Rs. 4,546</span></p>
                            <p> <span className="edit-on pull-right">Full Premium Breakup</span></p>

                        </div>
                        <div className="col-md-12 total-premium">
                            <div className="col-md-6"><span>Coverage Type</span></div>
                            <div className="col-md-6"><span className="pull-right">Base Plan</span></div>
                        </div>
                        <div className="col-md-12 adds-on-edit">
                            <p><span>3 Adds on</span> <span className="edit-on pull-right">Edit</span></p>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
export default ProposerRightSideBar;

