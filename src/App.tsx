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
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/Ionicons';
Icons.loadFont();

import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
interface HomeStackScreen {
  navigation: any;
}

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Home Screen
const HomeStackScreen = ({ navigation }: HomeScreen) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#DD5E98',
      },
      headerTintColor: '#20232a',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Welcome to My First App',
        headerLeft: () => (
          <Icons.Button
            color="#20232a"
            name="ios-menu"
            size={30}
            backgroundColor="#DD5E98"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

//Detail Screen
const DetailStackScreen = ({ navigation }: HomeScreen) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#DD5E98',
      },
      headerTintColor: '#20232a',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailStack.Screen
      name="Details"
      component={DetailScreen}
      options={{
        title: 'Welcome to the Details Page',
        headerLeft: () => (
          <Icons.Button
            color="#20232a"
            name="ios-menu"
            size={30}
            backgroundColor="#DD5E98"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
