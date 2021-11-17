import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import lecturersData from '../../data/lecturer'
import * as addressAction from '../../store/actions/address'

const SelectLecturerScreen = props => {
    const [text, setText] = useState('')
    const [lecturerList, setLecturerList] = useState([])
    const dispatch = useDispatch()
    const lecturers = lecturersData

    const textChangeHandler = input => {
        const filtered = lecturers.filter(lecturer => {
         return lecturer.name.toLowerCase().includes(input.toLowerCase())
        })
        setText(input);
        setLecturerList(filtered)
    }

    const onPressHandler = lecturer => {
        const newObject = { description: lecturer.department }
        dispatch(addressAction.getUserDestination(newObject)).then(() => {
            dispatch(addressAction.getTime('WALKING'))
            props.navigation.navigate('Direction', {
                lecturerName: lecturer.name
            })
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.input}
                placeholder="Search lecturer..."
                autoCorrect={false}
                onChangeText={textChangeHandler}
                value={text}
            />
            <ScrollView>
                {lecturerList.map((lecturer, i) => (
                    <TouchableOpacity 
                        style={styles.option} 
                        onPress={() => {
                            onPressHandler(lecturer)
                        }}
                        key={i}
                    >
                        <View style={styles.innerStyle}>
                            <Text style={styles.textStyle}>{lecturer.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#d9d9d9',
        borderRadius: 5,
        fontSize: 18
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
  

export default SelectLecturerScreen