import React, { Component } from 'react';
import ProposerLeftSideBar from '../proposer-form/ProposerLeftSidebar';
import ProposerRightSideBar from '../proposer-form/ProposerRightSidebar';

class ProposerDetails extends Component {
    render() {
        return (
            <div className="container-fluid container-fluid-custome proposer-details">
                <div className="row">
                    <ProposerLeftSideBar></ProposerLeftSideBar>
                    <ProposerRightSideBar></ProposerRightSideBar>
                </div>
            </div>
        );
    }
}
export default ProposerDetails;

