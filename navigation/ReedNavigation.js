import React from 'react'
import { Text, Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import InsertLocationScreen from '../screens/InsertLocationScreen'
import HomeMapScreen from '../screens/HomeMapScreen'
import HomeNewsScreen from '../screens/HomeNewsScreen'

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const mapNavigator = createStackNavigator({
    Home: {
        screen: HomeMapScreen,
        navigationOptions: {
            headerShown: false,
            tabBarVisible: false,
        }
    },
    InsertLocation: {
        screen: InsertLocationScreen,
        navigationOptions: {
            headerShown: false
        }
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const newsNavigator = createStackNavigator({
    Home: {
        screen: HomeNewsScreen
    }
})

const tabScreenConfig = {
    Map: {
        screen: mapNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <MaterialCommunityIcons name="map-marker" size={25} color={tabInfo.tintColor} />
                );
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel:
                Platform.OS === 'android' ? (
                    <Text>Map</Text>
                ) : (
                    'Map'
                )
        }
    },
    News: {
        screen: newsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <FontAwesome name="newspaper-o" size={25} color={tabInfo.tintColor} />
            },
        tabBarColor: Colors.accentColor,
        tabBarLabel:
            Platform.OS === 'android' ? (
                <Text>Favorites</Text>
            ) : (
                'News'
            )
        }
    }
}

const AppTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        });

export default createAppContainer(AppTabNavigator)