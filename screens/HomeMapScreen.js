import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text,
    Dimensions,
    TouchableHighlight,
    TouchableWithoutFeedback,
    StyleSheet 
} from 'react-native'
import MapView from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons'
import * as Location from 'expo-location'

const HomeScreen = props => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }
        
            // let location = await Location.getCurrentPositionAsync({})
            // console.log(location)
            // setLocation(location)
        })()
      }, [])
    
    return (
        <View style ={styles.container}>
            <MapView style={styles.map} />
            <TouchableWithoutFeedback onPress={() => console.log('Alert')}>
                <View style={styles.menuWrapper}>
                    <Ionicons name="ios-menu" size={32} color='black' />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.modalPosition}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            style={{ borderRadius: 10 }}
                            onPress={() => props.navigation.navigate({
                                routeName: 'InsertLocation'
                            })}>
                            <View style={styles.whereToStyle}>
                                <Ionicons name="ios-search" size={25} color='black' />
                                <Text style={{ ...styles.whereToText, fontWeight: 'bold' }}>Where to?</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.3,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {        
        height: Dimensions.get('window').height / 3.5,
        width: "100%",
        backgroundColor: 'white',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalPosition: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    whereToStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#f0f0f5',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    whereToText: {
        fontSize: 20,
        fontFamily: 'RubikBold',
        paddingLeft: 8
    },
    menuWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: 50,
        left: 15,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: { width: 0, height: 1 },
    }
})

export default HomeScreen
