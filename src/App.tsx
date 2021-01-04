/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  HomeStackScreen,
  DetailStackScreen,
  MainTabScreen,
  ProfileStackScreen,
  ExploreStackScreen,
  AnimationStackScreen,
} from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();

//Home Screen

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* Drawer Tab Contents */}
        <Drawer.Screen name="Welcome" component={MainTabScreen} />
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Explore" component={ExploreStackScreen} />
        <Drawer.Screen name="Animations" component={AnimationStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
