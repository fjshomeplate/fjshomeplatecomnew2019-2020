import React from 'react'
import { withAuthenticator } from 'aws-amplify-react' // or 'aws-amplify-react-native';
import Amplify from 'aws-amplify'
// Get the aws resources configuration parameters
import awsconfig from './aws-exports' // if you are using Amplify CLI

Amplify.configure(awsconfig)

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

export default withAuthenticator(App)
