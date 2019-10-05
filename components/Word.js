import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Word extends Component {
    render() {
        const {container} = styles
        const {en,vn} = this.props.myWord
        return (
            <View style ={container}>
                <Text>{en}</Text>
                <Text>{vn}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin:10,
        padding:10
    }
})
