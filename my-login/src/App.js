import React, { Component } from 'react';
import LoginScreen from './LoginScreen';

import './App.css';

class App extends Component {

  constructor(props){
    console.log("Inside constructor Method")
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }

  componentWillMount(){
    console.log("Inside componentWillMount Method")
    var loginPage =[];

    console.log("Inside componentWillMount" + loginPage)
    loginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({
        loginPage:loginPage
    })           
  }

  render() {
    return (
      <div className="App">
      {this.state.loginPage}
      {this.state.uploadScreen}
    </div>
    );
  }
}

export default App;