import { NavigationContainer } from '@react-navigation/native';
import AppContainer from './navigation/stackNavigator';

const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'profile/:id',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
     <AppContainer/>
    </NavigationContainer>
  );
}