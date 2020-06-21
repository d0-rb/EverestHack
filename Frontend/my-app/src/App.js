import React from 'react';
import HomeBase from './home/index'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig)

function App() {
  console.log(Auth);
  return (
    <div className="App">
      <HomeBase />
    </div>
  );
}

export default withAuthenticator(App, true);