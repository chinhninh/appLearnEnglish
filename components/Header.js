import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {connect} from 'react-redux'

class Header extends Component {

    isAddingButton() {
        this.props.dispatch({type: 'IS_ADDING'})
    }

    render() {
        const {container} = styles
        return (
            <View style = {container}>
                <Text/>
                <Text style ={{fontSize: 20}}>My Word</Text>
                <TouchableOpacity onPress ={this.isAddingButton.bind(this)}>
                    <Text style ={{fontSize: 30}}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(Header)

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
