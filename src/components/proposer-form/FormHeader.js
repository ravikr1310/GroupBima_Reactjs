import React, { Component } from 'react';
import fire from '../../config/Fire';

class FormHeader extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div className="container-fluid container-fluid-custome">
                <div className="row back-to-quotes">
                    <div className="col-md-12 ">
                        <a className="back" onClick={this.logout} href="#">BACK TO QUOTES </a>
                    </div>
                    <div className="col-md-12">
                        <a className="proposal" href="#">Proposal Form</a>
                    </div>
                </div>
            </div>

        );
    }
}
export default FormHeader;

