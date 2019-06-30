import React,{Component} from "react";

import Firebase from "firebase";
import config from "./Config";

import MainForm from './components/proposer-form/Form';

class App extends Component {
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
    const { developers } = this.state;
    return (
      <MainForm></MainForm>
        
    );
  }
}

export default App;
