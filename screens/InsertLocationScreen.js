import React, { useEffect, useRef } from 'react'
import { 
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'

const DestinationScreen = props => {
    const inputEl = useRef(null)
    const inputEl2 = useRef(null)
    useEffect(() => {
        
        inputEl2.current.focus()
    }, [])
    const handleText = (text) => {
        inputEl.current.setAddressText(text)
        inputEl.current.getCurrentLocation
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.directions}>
                <View style={styles.bottomShadow}>
                    <View style={{
                        ...styles.row,
                        shadowColor: '#000',
                    }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                                <Feather name="x" size={28} color='black' />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style= {{ flex: 3 }}>
                            <Text 
                                style={{
                                    fontSize: 18,
                                    fontFamily: 'RubikBold'
                                }}>Select destination
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="disc" size={20} color='#00cc00' />
                        </View>
                        <View style={{
                            flex: 5, 
                            justifyContent: 'center'
                        }}>
                            <TextInput
                                ref={inputEl2}
                                style={styles.textInput}
                                onChangeText={(text) => handleText(text)}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', 
                        paddingTop: 5, 
                        paddingBottom: 5
                    }}>
                        <View style={styles.icon}>
                            <MaterialIcons name="location-on" size={20} color='#5353c6' />
                        </View>
                        <View style={{
                            flex: 5, 
                            justifyContent: 'center'
                        }}>
                            <TextInput style={styles.textInput} />
                        </View>
                    </View>
                </View>
            </View>
            
            <GooglePlacesAutocomplete
                ref={inputEl}
                placeholder='Search'
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                    components: 'country:ng'
                }}
                styles={{
                    listView: {
                        position: 'absolute',
                        top: 50
                    }
                }}
            />
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
    bottomShadow: {
        backgroundColor: '#fff',
        width: "100%",
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5
    },
    directions: {
        overflow: 'hidden', 
        paddingBottom: 5
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
        paddingLeft: 18, 
        flex: 1, 
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
