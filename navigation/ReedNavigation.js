import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import InsertLocationScreen from '../screens/Map/InsertLocationScreen'
import HomeMapScreen from '../screens/Map/HomeMapScreen'
import HomeNewsScreen, { screenOptions as HomeNewsScreenOptions } from '../screens/News/HomeNewsScreen'
import DirectionScreen from '../screens/Map/DirectionScreen'
import BulletinScreen, { screenOptions as BulletinScreenOptions } from '../screens/Bulletin/BulletinScreen'
import DetailScreen from '../screens/General/DetailScreen'
import OptionsScreen from '../screens/Map/OptionsScreen'
import SearchLecturerScreen from '../screens/Map/SearchLecturerScreen'

import Colors from '../constants/Colors'

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
                screenOptions={{
                    headerShown: false
                }}
            />
            <MapStackNavigator.Screen 
                name='Options'
                component={OptionsScreen}
                options={{
                    headerShown: true,
                    headerBackTitle: 'Back',
                    headerTitle: ''
                }}
            />
            <MapStackNavigator.Screen 
                name='InsertLocation'
                component={InsertLocationScreen}
            />
            <MapStackNavigator.Screen 
                name='Direction'
                component={DirectionScreen}
            />
            <MapStackNavigator.Screen 
                name='SearchLecturer'
                component={SearchLecturerScreen}
                options={{
                    headerShown: true,
                    headerTitle: ''
                }}
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
                component={DetailScreen}
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
            <BulletinStackNavigator.Screen 
                name='BulletinDetail'
                component={DetailScreen}
                options={{
                    headerTitle: ''
                }}
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