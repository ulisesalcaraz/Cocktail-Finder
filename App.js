import React from 'react';
/* import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native'; */

import {Provider} from 'react-redux';

import SearchNavigator from './src/navigation/SearchNavigator';
import store from './src/redux/store';

//const store = generateStore();

const App = () => {
  return <SearchNavigator />;
};

//const styles = StyleSheet.create({});

export default (
  <Provider store={store}>
    <App />
  </Provider>
);
