import React, { Component } from 'react';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '../../assets/css/Header.css';
import '../../assets/css/Members.css';
import '../../assets/css/HealthPlans.css';
import fire from '../../config/Fire';
import firebase from 'firebase';
import FormBody from '../proposer-form/FormBody';
import Header from '../header/Header';
import Members from '../members/Members';
import FormHeader from '../proposer-form/FormHeader';
import FillDetails from '../proposer-form/FillDetails';
import ProposerDetails from '../proposer-form/ProposerDetails';
import MainFooter from '../footer/MainFooter';
import BottomFooter from '../footer/BottomFooter';

import Firebase from "firebase";
import config from "./Config";

class MainForm extends Component {
    constructor(props) {
        super(props);
        
        if (!firebase.apps.length) {
            Firebase.initializeApp(config);
        }
        
        this.state = {
            user: null,
            developers: [],
            eventId: null,
            goingNumber: null
        }
    }
    componentDidMount() {
        this.authListener();
        //this.getUserData();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // check on previous state
    //     // only write when it's different with the new state
    //     if (prevState !== this.state) {
    //         this.writeUserData();
    //     }
    // }


    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null });
            }
        })
    }


    // writeUserData = () => {
    //     // Firebase.database()
    //     //   .ref("/")
    //     //   .set(this.state);
        
    //     // firebase.database().ref(`/events/${this.eventId}`)
    //     // .child('goingNumber').set(goingNumber )
    //     // console.log("DATA SAVED");
        
    //   };

    writeUserData(salutation,proposer,eduqualification,maritalstatus1,maritalstatus2,maritalstatus3,genger1,genger2,profession,income,pancard){
        firebase.database().ref('Users/').set({
            salutation,
            proposer,
            eduqualification,
            maritalstatus1,
            maritalstatus2,
            maritalstatus3,
            genger1,
            genger2,
            profession,
            income,
            pancard
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    // getUserData = () => {
    //     let ref = firebase.database().ref('/');
    //     ref.on('value', snapshot => {
    //         const state = snapshot.val();
    //         this.setState(state);
    //     });
    //     console.log('DATA RETRIEVED');
    // }


    handleSubmit = (event) => {
        event.preventDefault();
        let salutation = this.refs.salutation.value;
        let proposer = this.refs.proposer.value;
        let eduqualification = this.refs.eduqualification.value;
        let maritalstatus1 = this.refs.maritalstatus1.value;
        let maritalstatus2 = this.refs.maritalstatus2.value;
        let maritalstatus3 = this.refs.maritalstatus3.value;
        let genger1 = this.refs.genger1.value;
        let genger2 = this.refs.genger2.value;
        let profession = this.refs.profession.value;
        let income = this.refs.income.value;
        let pancard = this.refs.pancard.value;
        
        let uid = this.refs.uid.value;
      
        if (uid && salutation && proposer && eduqualification && maritalstatus1 && maritalstatus2 && maritalstatus3 && genger1 && genger2 && profession && income && pancard){
          const { developers } = this.state;
          const devIndex = developers.findIndex(data => {
            return data.uid === uid 
          });
          developers[devIndex].salutation = salutation;
          developers[devIndex].proposer = proposer;
          developers[devIndex].eduqualification = eduqualification;
          developers[devIndex].maritalstatus1 = maritalstatus1;
          developers[devIndex].maritalstatus2 = maritalstatus2;
          developers[devIndex].maritalstatus3 = maritalstatus3;
          developers[devIndex].genger1 = genger1;
          developers[devIndex].genger2 = genger2;
          developers[devIndex].profession = profession;
          developers[devIndex].income = income;
          developers[devIndex].pancard = pancard;
          this.setState({ developers });
        }
        else if (salutation && proposer && eduqualification && maritalstatus1 && maritalstatus2 && maritalstatus3 && genger1 && genger2 && profession && income && pancard ) {
          const uid = new Date().getTime().toString();
          const { developers } = this.state;
          developers.push({ uid, salutation, proposer, eduqualification, maritalstatus1,maritalstatus2,maritalstatus3,genger1,genger2,profession,income,pancard})
          this.setState({ developers });
        }
      
        this.refs.salutation.value = '';
        this.refs.proposer.value = '';
        this.refs.uid.value = '';
        this.refs.eduqualification.value = '';
        this.refs.maritalstatus1.value = '';
        this.refs.maritalstatus2.value = '';
        this.refs.maritalstatus3.value = '';
        this.refs.genger1.value = '';
        this.refs.genger2.value = '';
        this.refs.profession.value = '';
        this.refs.income.value = '';
        this.refs.pancard.value = '';

      }
      
    
    render() {
        const { developers } = this.state;
        return (
            <div>
                <div className='row'>
                    <div className='col-xl-12'>
                        {
                            developers
                                .map(developer =>
                                    <div key={developer.uid} className="card float-left" style={{ width: '18rem', marginRight: '1rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{developer.name}</h5>
                                            <p className="card-text">{developer.role}</p>
                                            <button onClick={() => this.removeData(developer)} className="btn btn-link">Delete</button>
                                            <button onClick={() => this.updateData(developer)} className="btn btn-link">Edit</button>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <Header></Header>
                <FormHeader></FormHeader>
                <div className="container-fluid container-fluid-custome">
                    <Members></Members>
                    <FillDetails></FillDetails>
                </div>
                <ProposerDetails></ProposerDetails>
                <div className="container-fluid container-fluid-custome custom-footer">
                    <MainFooter></MainFooter>
                    <BottomFooter></BottomFooter>
                </div>
            </div>
        );
    }
}
export default MainForm;

