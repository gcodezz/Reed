import React, { useCallback, useEffect } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    SectionList 
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/HeaderButton'
import * as newsAction from '../../store/actions/news'

const HomeNewsScreen = (props) => {
    const dispatch = useDispatch()
    const currentNews = useSelector(state => state.news.current)
    const archiveNews = useSelector(state => state.news.archive)

    const DATA = [
        {
            title: 'Current News',
            data: currentNews
        },
        {
            title: 'Archive News',
            data: archiveNews
        }
    ]

    const loadNews = useCallback(async() => {
        try {
            dispatch(newsAction.getNews())
        } catch (err) {
            console.log(err)
        }
    }, [dispatch])

    useEffect(() => {
        loadNews()
    }, [dispatch])

    return (
        <View style={styles.container}>
            <SectionList 
                sections={DATA}
                keyExtractor={item => item.id}
                renderItem={itemData => 
                    <View style={{ marginHorizontal: 10 }}>
                        <TouchableOpacity 
                            key={itemData.item.id} 
                            style={styles.newsOutline}
                            onPress={() => (
                                props.navigation.navigate('Details', {
                                    postLink: itemData.item.details
                                })
                            )}
                        >
                            <Text style={{ fontFamily: 'KarlaRegular', fontSize: 18, flexWrap: 'wrap', flex: 1, marginRight: 10 }}>{itemData.item.outline}</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#b3b3b3', width: '100%'}}></View>
                    </View>
                }
                renderSectionHeader={({ section: { title } }) => {
                    let marginTop = 10
                    if (title == 'Archive News') {
                        marginTop = 40
                    }
                    return (
                        <Text style={{ fontFamily: 'KarlaBold', fontSize: 18, marginLeft: 10, marginVertical: 10, marginTop: marginTop }}>{title}</Text>
                    )
                }}
                stickySectionHeadersEnabled={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerTitle: 'News',
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
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    newsOutline: {
        flexDirection: 'row',
        marginVertical: 10
    },
})

export default HomeNewsScreen
