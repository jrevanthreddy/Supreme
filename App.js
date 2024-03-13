import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Settings from './Screens/Settings';
import Language from './Screens/Language';
import Country from './Screens/Country';
import State from './Screens/State';
import Upicash from './Screens/Upicash';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ labelStyle: { fontSize: 15 }, tabBarStyle: { height: 80 }, }}
        screenOptions={{ tabBarLabelStyle: { padding: 5, } }}
      >
        <Tab.Screen name='Coin' component={Settings}
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/coin.png')} style={{ width: 30, height: 30, }} />
            ),
          }}
        />
        <Tab.Screen name='Language' component={Language} options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={require('./assets/shop.png')} style={{ width: 30, height: 30, tintColor: color }} />
          ),
        }} />
        <Tab.Screen name='Country' component={Country} options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('./assets/home.png')} style={{ width: 30, height: 30 }} />
          ),
        }} />
        <Tab.Screen name='State' component={State} options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('./assets/referral.png')} style={{ width: 30, height: 30 }} />
          ),
        }} />
        <Tab.Screen name='Upicash' component={Upicash} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}