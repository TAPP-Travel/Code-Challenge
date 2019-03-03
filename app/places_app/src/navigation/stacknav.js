import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
