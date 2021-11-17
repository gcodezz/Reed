import React, { useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/HeaderButton'
import * as bulletinAction from '../../store/actions/bulletin'
import TouchableCard from '../../components/TouchableCard'

const BulletinScreen = (props) => {
    const dispatch = useDispatch()
    const bulletins = useSelector(state => state.bulletin.bulletins)

    const loadBulletin = useCallback(async() => {
        try {
            dispatch(bulletinAction.getBulletin())
        } catch (err) {
            console.log(err)
        }
    }, [dispatch])

    useEffect(() => {
        loadBulletin()
    }, [dispatch])

    return (
        <FlatList
            data={bulletins}
            keyExtractor={item => item.id}
            renderItem={itemData => 
                <TouchableCard
                    key={itemData.item.id} 
                    text={itemData.item.year}
                    onPressHandler={() => 
                        props.navigation.navigate('BulletinDetail', {
                            bulletinLink: itemData.item.link
                        })
                    }
                />
            }
        />
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