import React, { useEffect, useRef } from 'react'
import { 
    View,
    SafeAreaView,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import GooglePlace from '../../components/GooglePlace'
import * as addressAction from '../../store/actions/address'

const DestinationScreen = props => {
    const userAddress = useSelector(state => state.address.userAddress)
    
    const dispatch = useDispatch()

    const inputEl = useRef()
    const inputEl2 = useRef()

    useEffect(() => {
        inputEl.current.focus()
        inputEl2.current.setAddressText(userAddress)
    }, [])

    const onPressHandler = async(data, details = null) => {
        await dispatch(addressAction.getUserDestination(data)).then(() => {
            dispatch(addressAction.getTime('WALKING'))
            props.navigation.navigate('Direction')
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginHorizontal: 30 }}>
                <View style={styles.row}>
                    <View style={styles.icon}>
                        <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                            <Feather name="x" size={28} color='black' />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text 
                            style={{
                                fontSize: 18,
                                fontFamily: 'KarlaBold'
                            }}>Select destination
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="disc" size={20} color='#00cc00' />
                    </View>
                    <GooglePlace 
                        top 
                        focus={inputEl2}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.icon}>
                        <MaterialIcons name="location-on" size={20} color='#5353c6' />
                    </View>
                    <GooglePlace 
                        focus={inputEl} 
                        parentCallback={onPressHandler}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

DestinationScreen.navigationOptions = navigationData => {
    return {
        headerLeft: () => null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    textInput: { 
        backgroundColor: '#e6e6e6',
        width: "80%",
        fontSize: 17,
        height: 40,
        padding: 10,
        borderRadius: 6
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row', 
        paddingTop: 5, 
        paddingBottom: 5
    }
})

export default DestinationScreen
