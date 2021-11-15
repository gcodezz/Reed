import React from 'react'
import { WebView } from 'react-native-webview'
import { StyleSheet } from 'react-native'

const BulletinDetailScreen = ({ route }) => {
    const uri = route.params.bulletinLink || route.params.postLink
    return (
        <WebView 
            style={styles.container}
            source={{ uri: uri }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default BulletinDetailScreen