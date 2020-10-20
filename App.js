import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Calc from './src/screens/Calc';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import TabNav from './src/route/TabNav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNav />
      </Provider>
    );
  }
}

export default App;
