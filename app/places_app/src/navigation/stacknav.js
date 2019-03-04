import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';
import Search from '../screens/search';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
