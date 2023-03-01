import {
  Landing,
  Login,
  Register,
  AddNew,
  Cars,
  Profile,
  Location,
} from './src/screens';
import {WelcomeLanding} from './src/components';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#C6AB59'}} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="wellcome">
          <Stack.Screen name="wellcome" component={WelcomeLanding} />
          <Stack.Screen name="landing" component={Landing} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="cars" component={Cars} />
          <Stack.Screen name="addnew" component={AddNew} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="location" component={Location} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
