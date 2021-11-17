import React from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'
import TouchableCard from '../../components/TouchableCard'

const OptionsScreen = props => {
    return (
        <View style={styles.container}>
            <TouchableCard 
                text='Search by Place' 
                onPressHandler={() => props.navigation.navigate('InsertLocation')} 
            />
            <TouchableCard 
                text='Search by Lecturer' 
                onPressHandler={() => props.navigation.navigate('SearchLecturer')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default OptionsScreen
