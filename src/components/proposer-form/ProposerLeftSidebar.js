import React, { Component } from 'react';
import Firebase from "firebase";
import config from "./Config";

class ProposerLeftSideBar extends Component {
    constructor(props) {
        super(props);
        //Firebase.initializeApp(config);
        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
        }
        this.state = {
          developers: []
        };
      }
    
      componentDidMount() {
        this.getUserData();
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
          this.writeUserData();
        }
      }
    
      writeUserData = () => {
        Firebase.database()
          .ref("/")
          .set(this.state);
        console.log("DATA SAVED");
      };
    
      getUserData = () => {
        let ref = Firebase.database().ref("/");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
      };
    
      handleSubmit = event => {
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
    
        if (uid && salutation && proposer && eduqualification && maritalstatus1 && maritalstatus2 && maritalstatus3 && genger1 && genger2 && profession && income && pancard) {
          const { developers } = this.state;
          const devIndex = developers.findIndex(data => {
            return data.uid === uid;
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
        } else if (salutation && proposer && eduqualification && maritalstatus1 && maritalstatus2 && maritalstatus3 && genger1 && genger2 && profession && income && pancard) {
          const uid = new Date().getTime().toString();
          const { developers } = this.state;
          developers.push({ uid, salutation, proposer, eduqualification, maritalstatus1,maritalstatus2,maritalstatus3,genger1,genger2,profession,income,pancard });
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
      };
    
      removeData = developer => {
        const { developers } = this.state;
        const newState = developers.filter(data => {
          return data.uid !== developer.uid;
        });
        this.setState({ developers: newState });
      };
    
      updateData = developer => {
        this.refs.uid.value = developer.uid;
        this.refs.name.value = developer.name;
        this.refs.role.value = developer.role;
      };


    render() {
        return (

            <div className="col-md-8 left-section">
                <div className="left-bg">
                    <h2>Proposer Details</h2>
                    <h2 className="pull-right">Step 1 of 7</h2>
                    <div className="hori-saperator"></div>
                    <div className="form-section">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="my-5">
                                <div className="row">
                                    <div className="col-md-12 mx-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <input type='hidden' ref='uid' />
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label className="form-control-placeholder1" htmlFor="salutation">Salutation</label>
                                                            <select type="text" id="salutationme" ref='salutation' className="form-control" required>
                                                                <option value="">Select</option>
                                                                <option value="two">two</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="form-group">
                                                            <input type="text" id="proposer" ref='proposer' className="form-control" required />
                                                            <label className="form-control-placeholder1" htmlFor="proposer">Proposer's Name
                              </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-control-placeholder1" htmlFor="salutation">Educational Qualification
                              </label>
                                                            <select type="text" id="eduqualification" ref='eduqualification' className="form-control" required>
                                                                <option value="">Select</option>
                                                                <option value="two">two</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-control-placeholder1" htmlFor="salutation">Marital Status
                              </label>
                                                            <div className="radio">
                                                                <label><input type="radio" name="optradio" ref='maritalstatus1' />Single</label>
                                                            </div>
                                                            <div className="radio">
                                                                <label><input type="radio" name="optradio" ref='maritalstatus2'/>Married</label>
                                                            </div>
                                                            <div className="radio">
                                                                <label><input type="radio" name="optradio" ref='maritalstatus3'/>Divorced</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-control-placeholder1" htmlFor="salutation">Gender
                              </label>
                                                            <div className="radio">
                                                                <label><input type="radio" name="optradio" ref='genger1'/>Male</label>
                                                            </div>
                                                            <div className="radio">
                                                                <label><input type="radio" name="optradio" ref='genger2'/>Female</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-control-placeholder1" htmlFor="salutation">Profession
                              </label>
                                                            <select type="text" id="salutationme" ref='profession' className="form-control" required>
                                                                <option value="">Select</option>
                                                                <option value="two">two</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-control-placeholder1" htmlFor="salutation">Income
                              </label>
                                                            <select type="text" id="salutationme" ref='income' className="form-control" required>
                                                                <option value="">Select</option>
                                                                <option value="two">two</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" id="proposer" ref='pancard' placeholder="value" className="form-control" required />
                                                            <label className="form-control-placeholder1" htmlFor="proposer">PAN Card
                              </label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row insured-m-btn">
                                            <button type="submit" className="btn btn-primary">Continue to Insured Members
                      </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
                <div className="row edit-section cus-mlr0">
                    <div className="col-md-11">
                        <p>Step 2 of 7</p>
                        <p>Insured Members</p>
                    </div>
                    <div className="col-md-1 pull-right">
                        <span className="pull-right"><a href="#">Edit</a></span>
                    </div>
                </div>
                <div className="row edit-section cus-mlr0">
                    <div className="col-md-11">
                        <p>Step 3 of 7</p>
                        <p>General Questions</p>
                    </div>
                    <div className="col-md-1 pull-right">
                        <span className="pull-right"><a href="#">Edit</a></span>
                    </div>
                </div>
                <div className="row edit-section cus-mlr0">
                    <div className="col-md-11">
                        <p>Step 4 of 7</p>
                        <p>Medical History</p>
                    </div>
                    <div className="col-md-1 pull-right">
                        <span className="pull-right"><a href="#">Edit</a></span>
                    </div>
                </div>
                <div className="row edit-section cus-mlr0">
                    <div className="col-md-11">
                        <p>Step 5 of 7</p>
                        <p>Nominee</p>
                    </div>
                    <div className="col-md-1 pull-right">
                        <span className="pull-right"><a href="#">Edit</a></span>
                    </div>
                </div>
                <div className="row edit-section cus-mlr0">
                    <div className="col-md-11">
                        <p>Step 6 of 7</p>
                        <p>Previous Insurer Details</p>
                    </div>
                    <div className="col-md-1 pull-right">
                        <span className="pull-right"><a href="#">Edit</a></span>
                    </div>
                </div>
            </div>



        );
    }
}
export default ProposerLeftSideBar;

