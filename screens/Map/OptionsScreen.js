import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const OptionsScreen = props => {
    const forwardIcon = (
        <Ionicons 
            name="chevron-forward" 
            size={20} 
            color='purple' 
        />
    )
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={() => props.navigation.navigate('InsertLocation')}>
                <View style={styles.innerStyle}>
                    <Text style={styles.textStyle}>Search by Place</Text>
                    {forwardIcon}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <View style={styles.innerStyle}>
                    <Text style={styles.textStyle}>Search by Lecturer</Text>
                    {forwardIcon}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    },
    innerStyle: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    textStyle: {
        fontSize: 16, 
        color: '#737373' 
    }
})

export default OptionsScreen
