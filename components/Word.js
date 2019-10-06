import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'

class Word extends Component {
    MemoForgot(){
        this.props.dispatch({
            type: 'MEMORIZED',
            id : this.props.myWord.id
        })
    }

    buttonIsSHow() {
        this.props.dispatch({
            type: 'IS_SHOW',
            id: this.props.myWord.id
        })
    }

    render() {
        const {container,button,textButton} = styles
        const {en,vn,memorized,isShow} = this.props.myWord
        const textDecorationLine = memorized? 'line-through': 'none'
        const TextMemorized = memorized? 'Forgot': 'Memorized'
        const showVn = isShow? vn: '-----'
        return (
            <View style ={container}>
                <Text style={{textDecorationLine}}>{en}</Text>
                <Text>{showVn}</Text>
                <View style = {button}>
                    <TouchableOpacity 
                        style={textButton}
                        onPress = {this.MemoForgot.bind(this)}
                    >
                        <Text>{TextMemorized}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={textButton}
                        onPress = {this.buttonIsSHow.bind(this)}
                    >
                        <Text>Show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(Word)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin:10,
        padding:10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },
    textButton: {
        backgroundColor: 'orange',
        padding:10,
        borderRadius: 5
    }
})
