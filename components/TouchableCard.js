import React from 'react'
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const TouchableCard = props => {
    const forwardIcon = (
        <Ionicons 
            name="chevron-forward" 
            size={20} 
            color='purple' 
        />
    )
    return (
        <TouchableOpacity 
            style={styles.option} 
            onPress={props.onPressHandler}
        >
            <View style={styles.innerStyle}>
                <Text style={styles.textStyle}>{props.text}</Text>
                {forwardIcon}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default TouchableCard
