import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import {connect} from 'react-redux'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            en:'',
            vn:''
        }
    }

    addWord() {
        const {en,vn} = this.state
        this.props.dispatch({
            type: 'ADD_WORD',
            en,
            vn
        })
        this.props.dispatch({type: 'IS_ADDING'})
    }

    render() {
        const {container, textInput,styleButton} = styles
        return (
            <View style = {container}>
                <TextInput 
                    style ={textInput}
                    value = {this.state.en}
                    onChangeText = {(text) => this.setState({en: text})}
                    placeholder = 'English word'
                />
                <TextInput 
                    style = {textInput}
                    value = {this.state.vn}
                    onChangeText = {(text) => this.setState({vn: text})}
                    placeholder = 'Vietnammese'
                />
                <TouchableOpacity style={styleButton} onPress ={this.addWord.bind(this)}>
                    <Text style ={{fontSize: 20}}>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(Form)

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
