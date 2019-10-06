import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class Form extends Component {
    render() {
        const {container, textInput,styleButton} = styles
        return (
            <View style = {container}>
                <TextInput style ={textInput}/>
                <TextInput style = {textInput}/>
                <TouchableOpacity style={styleButton}>
                    <Text style ={{fontSize: 20}}>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    textInput: {
        height: 40,
        backgroundColor: 'white',
        margin: 10
    },
    styleButton: {
        justifyContent: 'center', 
        alignItems:'center',
        marginTop: 5
    }
})
