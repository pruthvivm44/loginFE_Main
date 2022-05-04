import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import store from '../src/store';
import { Provider } from 'react-redux';
import Logincontainer from '../src/containers/LoginContainer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Logincontainer/>
    </Provider>
  );
}

export default MyApp;
