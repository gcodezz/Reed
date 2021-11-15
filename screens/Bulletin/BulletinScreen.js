import React, { useCallback, useEffect } from 'react'
import { 
    View, 
    FlatList, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import HeaderButton from '../../components/HeaderButton'
import * as bulletinAction from '../../store/actions/bulletin'

const BulletinScreen = (props) => {
    const dispatch = useDispatch()
    const bulletins = useSelector(state => state.bulletin.bulletins)

    const forwardIcon = (
        <Ionicons 
            name="chevron-forward" 
            size={20} 
            color='purple' 
        />
    )

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
                <TouchableOpacity 
                    key={itemData.item.id} 
                    style={styles.option}
                    onPress={() => 
                        props.navigation.navigate('BulletinDetail', {
                            bulletinLink: itemData.item.link
                        })
                    }
                >
                    <View style={styles.innerStyle}>
                        <Text style={styles.textStyle}>{itemData.item.year}</Text>
                        {forwardIcon}
                    </View>
                </TouchableOpacity>
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

const styles = StyleSheet.create({
    innerStyle: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    textStyle: {
        fontSize: 16, 
        color: '#595959' 
    },
    option: {
        backgroundColor: 'white',
        width: "90%",
        fontSize: 18,
        height: 40,
        padding: 10,
        borderRadius: 6,
        marginVertical: 10,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
        elevation: 6,
    }
})

export default BulletinScreen