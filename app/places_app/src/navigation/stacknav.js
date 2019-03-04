import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';
import PlaceDetail from '../screens/placeDetail';
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
  PlaceDetail: {
    screen: PlaceDetail,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
