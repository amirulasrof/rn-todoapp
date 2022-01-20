// In App.js in a new project

import React, { useContext, useEffect, useState } from 'react';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import Home from '../screens/home';
import Login from '../screens/login';
import Auth from '../screens/auth';
import SignUp from '../screens/signup';

// context
import { UserContext } from '../providers/contexts/User';
import { ThemeContext } from '../providers/contexts/Theme';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function DefaultNavigator() {

  // context
  const {user, setUser} = useContext(UserContext);
  const {mode, setMode} = useContext(ThemeContext);

  // initial state
  const [loading, setLoading] = useState(false);

  // lifecycle
  useEffect(() => {
    setLoading(true);
  }, [])

  useEffect(() => {
    // this indicate that 'user' data already changed
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [user])

  return (
    <NavigationContainer theme={mode == 'dark' ? DarkTheme : DefaultTheme}>
      {
        loading ? 
          <Auth />
        :
        user ?
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={Home} 
            options={{
              title: 'Home',
              headerStyle: {
                elevation: 0
              }
            }}
          />
        </Stack.Navigator>
        :
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name='login' component={Login} 
              options={{
                title: 'Login',
                headerStyle: {
                  elevation: 0
                }
              }}
            />
            <Stack.Screen name='signup' component={SignUp} 
              options={{
                title: 'SignUp',
                headerStyle: {
                  elevation: 0
                },
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}
            />
          </Stack.Navigator>
      }

    </NavigationContainer>
  );
}

export default DefaultNavigator
