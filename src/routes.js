import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';
import Webview from './pages/Webview';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: false,
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Usuários' }}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Webview" component={Webview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
