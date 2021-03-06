import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header, CryptoContainer } from './src/Components';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
        </View>
      </Provider>
    );
  }
}
