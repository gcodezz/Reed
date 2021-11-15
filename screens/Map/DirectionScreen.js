import React, { useState } from 'react'
import { 
    View,
    Dimensions,
    Text,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Feather, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'

import { GOOGLE_MAPS_APIKEY } from '@env'
import * as addressAction from '../../store/actions/address'

let { width, height } = Dimensions.get('window')

const Direction = (props) => {
    const [moveMode, setMoveMode] = useState('WALKING')

    const dispatch = useDispatch()

    const { 
        userAddress, 
        destinationAddress, 
        destinationCoords: destinationObj,
        userCoords: originObj,
        drivingData,
        walkingData
    } = useSelector(state => state.address)

    const destination = {
        lat: destinationObj.lat, 
        lng: destinationObj.lng
    }

    const origin = {
        lat: originObj.lat, 
        lng: originObj.lng
    }

    const handleModePress = (mode) => {
        setMoveMode(mode)
        dispatch(addressAction.getTime(mode))
    }
    
    return (
        <View style ={styles.container}>
            <SafeAreaView>
                <View style={styles.modalTop}>
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
                                }}>Route Details
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="disc" size={20} color='#00cc00' />
                        </View>
                        <View style={styles.textInput}><Text style={{ fontSize: 18 }}>{userAddress}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.icon}>
                            <MaterialIcons name="location-on" size={20} color='#5353c6' />
                        </View>
                        <View style={styles.textInput}><Text style={{ fontSize: 18 }}>{destinationAddress}</Text></View>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={[styles.iconStyle, moveMode == 'DRIVING' ? styles.highLight : null]}
                        onPress={() => {
                            handleModePress('DRIVING')
                        }}
                    >
                        <Ionicons name="car" size={24} color='#5353c6' />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.iconStyle, moveMode == 'WALKING' ? styles.highLight : null ]}
                        onPress={() => {
                            handleModePress('WALKING')
                        }}
                    >
                        <MaterialIcons name="directions-walk" size={24} color='#5353c6' />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.iconStyle, moveMode == 'BICYCLING' ? styles.highLight : null]}
                        onPress={() => {
                            handleModePress('BICYCLING')
                        }}>
                        <Ionicons name="bicycle" size={24} color='#5353c6' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 7.4463584083568435,
                    longitude: 3.8932349126516748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={{
                    latitude: origin.lat,
                    longitude: origin.lng,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.0011,
                }}
            >
                <MapViewDirections
                    origin={{
                        latitude: origin.lat,
                        longitude: origin.lng
                    }}
                    destination={{
                        latitude: destination.lat,
                        longitude: destination.lng
                    }}
                    apikey={GOOGLE_MAPS_APIKEY}
                    mode={moveMode}
                    strokeWidth={7}
                    strokeColor="#4d79ff"
                />
                <Marker
                    coordinate={{ 
                        latitude: origin.lat, 
                        longitude: origin.lng
                    }}
                    title='Origin'
                    description='Start point' 
                    identifier='origin'
                />
                <Marker
                    coordinate={{ 
                        latitude: destination.lat, 
                        longitude: destination.lng
                    }}
                    title='Destination'
                    description='End point' 
                    identifier='Destination'
                />
            </MapView>
            <View style={styles.distanceTime}>
                <Text style={styles.dataStyle}>Distance: {moveMode == 'DRIVING' ? drivingData && drivingData.distance : walkingData && walkingData.distance}</Text>
                <Text style={{ padding: 10, fontFamily: 'KarlaBold', fontSize: 18, color: '#9494b8' }}>Time: {moveMode == 'DRIVING' ? drivingData && drivingData.duration : walkingData && walkingData.duration}</Text>
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
        width: width,
        height: height
    },
    menuWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginLeft: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: { width: 0, height: 1 },
    },
    textInput: {
        backgroundColor: '#e6e6e6',
        width: "80%",
        fontSize: 18,
        height: 40,
        padding: 10,
        borderRadius: 6,
        marginBottom: 10
    },
    modalTop: {
        width: '100%', 
        backgroundColor: 'white',
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
    },
    iconStyle: {
        width: 50, 
        height: 30, 
        marginVertical: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10 
    },
    highLight: {
        backgroundColor: '#e6e6e6' 
    },
    distanceTime: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#a6a6a6',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,  
        elevation: 5
    },
    dataStyle: { 
        padding: 10, 
        fontFamily: 'KarlaBold', 
        fontSize: 18, 
        color: '#9494b8' 
    }
})

export default Direction