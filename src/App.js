import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/Header.css';
import './assets/css/Members.css';
import './assets/css/HealthPlans.css';
import Header from './components/header/Header';
import Members from './components/members/Members';
import HealthPlans from './components/health-insurance-plans/HealthPlans';
import HealthPlansHeader from './components/health-insurance-plans/HealthPlansHeader';
import Filter from './components/health-insurance-plans/Filter';
import Help from './components/health-insurance-plans/Help';
import BasePlans from './components/health-insurance-plans/base-plans/BasePlans';
import GetAssistOffline from './components/sidebar-container/GetAssistOffline';
import GetUpdateOnPolicy from './components/sidebar-container/GetUpdateOnPolicy';
import MainFooter from './components/footer/MainFooter';
import BottomFooter from './components/footer/BottomFooter';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container-fluid container-fluid-custome">
          <Members></Members>
          <div class="row health-insurance-plan">
            <div class="col-md-10 width76">
              <HealthPlansHeader></HealthPlansHeader>
              <Filter></Filter>
              <Help></Help>
              <BasePlans></BasePlans>
            </div>
            <div class="col-md-2 width24 sidebar-container">
              <GetAssistOffline></GetAssistOffline>
              <GetUpdateOnPolicy></GetUpdateOnPolicy>
            </div>
          </div>
        </div>
        <div class="container-fluid container-fluid-custome custom-footer">
          <MainFooter></MainFooter>
          <BottomFooter></BottomFooter>
        </div>
      </div>
    );
  }
}

export default App;
