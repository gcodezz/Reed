import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'

const BulletinScreen = () => {
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    )
}

export const screenOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu' 
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
    }
}

export default BulletinScreen