import React, { Component } from 'react';
import fire from './config/Fire';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.state = {
            email: '',
            password: '',
            fireErrors:'',
            formTitle : 'Login Form',
            emailLbl: 'Email',
            passwordLbl: 'Password',
            loginBtn: true
        }
    }


    login(e) {
        e.preventDefault();
        console.log(this.state.email);        
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message});
        })
    }

    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    register(e) {
        e.preventDefault();       
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message});
        })
    }
    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle : 'Register new user', loginBtn : false, fireErrors: ''});
        }else{
            this.setState({formTitle : 'Login', loginBtn : true, fireErrors: ''});
        }
    }

    render() {
        let errorNotification = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>) : null;

        let submitBtn = this.state.loginBtn ? 
            (<input type="submit" className="btn btn-primary" onClick={this.login} value="Login"/>) :
            (<input type="submit" className="btn btn-success" onClick={this.register} value="Register"/>);

        let login_register = this.state.loginBtn ?
            (<button className="btn btn-success pull-right" onClick={() => this.getAction('reg')}>Register</button>) :
            (<button className="btn btn-primary pull-right" onClick={() => this.getAction('login')}>Login</button>)
        return (
            <div className="container">
                <h2>{this.state.formTitle}</h2>
                <span className="text-danger">
                    {errorNotification}
                </span>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">{this.state.emailLbl}:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">{this.state.passwordLbl}:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter password" />
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    {/* <button type="submit" onClick={this.login} className="btn btn-default">Submit</button> */}
                    {submitBtn}
                    {login_register}
                </form>
                
            </div>
        );
    }
}

export default Login;