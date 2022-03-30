import { Amplify } from 'aws-amplify';
import Home from './pages/home.js'

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className='App'>
      <Home />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);