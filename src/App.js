import React, {Component} from 'react';
import Web3 from 'web3';
import './App.css';

class App extends Component {

    componentDidMount(){
      this.loadBlockchainData();
    }


    async loadBlockchainData(){
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
      const accounts = await web3.eth.getAccounts()
      console.log('accounts:', accounts[0])
      this.setState({
        account:accounts[0],
      });

    }

    constructor(props){
        super(props);
        this.state = {
          account: '',
        }
    }

    render(){
        return (
          <div className="container">
            <h1>Hello Boss</h1>
            <p>Your Account {this.state.account}</p>
          </div>
        );
      }
    }

export default App;
