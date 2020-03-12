import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';

import StartScreen from '../screens/StartScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchInput from '../components/SearchInput';

const SearchNavigator = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: {
        headerShown: false,
        headerMode: 'screen',
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: () => <SearchInput navigation={navigation} />
        };
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(SearchNavigator);
