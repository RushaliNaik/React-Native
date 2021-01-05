import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
Icons.loadFont();

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import AnimationScreen from './AnimationScreen';

interface MainTabScreen {
  navigation: any;
}

interface HomeStackScreen {
  navigation: any;
}

interface DetailStackScreen {
  navigation: any;
}

interface ProfileStackScreen {
  navigation: any;
}

interface ExploreStackScreen {
  navigation: any;
}

interface AnimationStackScreen {
  navigation: any;
}

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const AnimationStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export function MainTabScreen({}: MainTabScreen) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#20232a"
      style={styles.container}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#DD5E98',
          tabBarIcon: ({ color }) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor: '#91CB3E',
          tabBarIcon: ({ color }) => (
            <Icons name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#FFB30F',
          tabBarIcon: ({ color }) => (
            <Icons name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#12EAEA',
          tabBarIcon: ({ color }) => (
            <Icons name="eye" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Animation"
        component={AnimationStackScreen}
        options={{
          tabBarLabel: 'Animation',
          tabBarColor: '#A07178',
          tabBarIcon: ({ color }) => (
            <Icons name="rocket" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

//Home Screen
function HomeStackScreen({ navigation }: HomeStackScreen) {
  return (
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
}

//Detail Screen
const DetailStackScreen = ({ navigation }: DetailStackScreen) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#91CB3E',
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
            backgroundColor="#91CB3E"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);

//Profile Screen
const ProfileStackScreen = ({ navigation }: ProfileStackScreen) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FFB30F',
      },
      headerTintColor: '#20232a',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Welcome to the Profile Page',
        headerLeft: () => (
          <Icons.Button
            color="#20232a"
            name="ios-menu"
            size={30}
            backgroundColor="#FFB30F"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

//Explore Screen
const ExploreStackScreen = ({ navigation }: ExploreStackScreen) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#12EAEA',
      },
      headerTintColor: '#20232a',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ExploreStack.Screen
      name="Profile"
      component={ExploreScreen}
      options={{
        title: 'Welcome to the Explore Page',
        headerLeft: () => (
          <Icons.Button
            color="#20232a"
            name="ios-menu"
            size={30}
            backgroundColor="#12EAEA"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </ExploreStack.Navigator>
);

//Animation Screen
function AnimationStackScreen({ navigation }: AnimationStackScreen) {
  return (
    <AnimationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A07178',
        },
        headerTintColor: '#20232a',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <AnimationStack.Screen
        name="Home"
        component={AnimationScreen}
        options={{
          title: 'Welcome to Animation Screen',
          headerLeft: () => (
            <Icons.Button
              color="#20232a"
              name="ios-menu"
              size={30}
              backgroundColor="#A07178"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </AnimationStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D00000',
  },
});
export {
  DetailStackScreen,
  HomeStackScreen,
  ProfileStackScreen,
  ExploreStackScreen,
  AnimationStackScreen,
};
