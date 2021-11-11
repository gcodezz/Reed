import React from 'react'
import { WebView } from 'react-native-webview'
import { StyleSheet } from 'react-native'

const DetailNewsScreen = props => {
    const uri = props.route.params.postLink
    return (
        <WebView 
            style={styles.container}
            source={{ uri: uri }}
        />
    )
}

DetailNewsScreen.navigationOptions = () => {
    return {
        headerTitle: () => null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default DetailNewsScreen