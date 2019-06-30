import React, { Component } from 'react';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '../../assets/css/Header.css';
import '../../assets/css/Members.css';
import '../../assets/css/HealthPlans.css';
import Login from '../../Login';
import Form from '../proposer-form/Form';

import fire from '../../config/Fire';



class FormBody extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        this.authListener();
        this._isMounted = true;
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null });
            }
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div className="App">
        {this.state.user ? (<Form/>) :(<Login/>)}
            </div>
        );
    }
}
export default FormBody;

