import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import SearchScreen from '../screens/SearchScreen';

const SearchNavigator = createStackNavigator({
  Start: StartScreen,
  Search: {
    screen: SearchScreen,
  },
},
{
  mode: 'modal',
  headerMode: 'none'
});

export default createAppContainer(SearchNavigator);
