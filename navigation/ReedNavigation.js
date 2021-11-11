import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import InsertLocationScreen from '../screens/InsertLocationScreen'
import HomeMapScreen from '../screens/HomeMapScreen'
import HomeNewsScreen, { screenOptions as HomeNewsScreenOptions } from '../screens/HomeNewsScreen'
import DirectionScreen from '../screens/DirectionScreen'
import DetailNewsScreen from '../screens/DetailNewsScreen'
import BulletinScreen, { screenOptions as BulletinScreenOptions } from '../screens/BulletinScreen'

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerShown: false
}

const MapStackNavigator = createStackNavigator()

const MapNavigator = () => {
    return (
        <MapStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <MapStackNavigator.Screen 
                name='HomeMap'
                component={HomeMapScreen}
            />
            <MapStackNavigator.Screen 
                name='InsertLocation'
                component={InsertLocationScreen}
            />
            <MapStackNavigator.Screen 
                name='Direction'
                component={DirectionScreen}
            />
        </MapStackNavigator.Navigator>
    )
}

const NewsStackNavigator = createStackNavigator()

const NewsNavigator = () => {
    return (
        <NewsStackNavigator.Navigator>
            <NewsStackNavigator.Screen 
                name='NewsOutline'
                component={HomeNewsScreen}
                options={HomeNewsScreenOptions}
            />
            <NewsStackNavigator.Screen 
                name='Details'
                component={DetailNewsScreen}
                options={{
                    headerTitle: ''
                }}
            />
        </NewsStackNavigator.Navigator>
    )
}

const BulletinStackNavigator = createStackNavigator()

const BulletinNavigator = () => {
    return (
        <BulletinStackNavigator.Navigator>
            <BulletinStackNavigator.Screen 
                name='Bulletins'
                component={BulletinScreen}
                options={BulletinScreenOptions}
            />
        </BulletinStackNavigator.Navigator>
    )
}

const ReedDrawerNavigator = createDrawerNavigator()

const ReedNavigator = () => {
    return (
        <ReedDrawerNavigator.Navigator screenOptions={{
            headerShown: false
        }}>
            <ReedDrawerNavigator.Screen 
                name='Map'
                component={MapNavigator}
                options={{
                    drawerIcon: props => (
                        <MaterialCommunityIcons 
                            name="map-marker" 
                            size={25} 
                            color='#76bdd5' 
                        />
                    )
                }}
            />
            <ReedDrawerNavigator.Screen 
                name='News'
                component={NewsNavigator}
                options={{
                    drawerIcon: props => (
                        <FontAwesome 
                            name="newspaper-o" 
                            size={25} 
                            color='#76bdd5' 
                        />
                    )
                }}
            />
            <ReedDrawerNavigator.Screen 
                name='Bulletin'
                component={BulletinNavigator}
                options={{
                    drawerIcon: props => (
                        <MaterialCommunityIcons 
                            name="bulletin-board" 
                            size={24} 
                            color='#76bdd5' 
                        />
                    )
                }}
            />
        </ReedDrawerNavigator.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ReedNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator