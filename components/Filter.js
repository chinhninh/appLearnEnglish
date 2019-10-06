import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {connect} from 'react-redux'

class Filter extends Component {
    highLightButton(filterName) {
        const {myFilter} = this.props
        if (filterName === myFilter) return {color: 'white'};
        return {color: 'black'}
    }

    filterWordButton(actionType){
        this.props.dispatch({type: actionType})
    }

    render() {
        const {container} = styles
        return (
            <View style={container}>
                <TouchableOpacity onPress = {()=>this.filterWordButton('FILTER_SHOW_ALL')}>
                    <Text style ={this.highLightButton('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>this.filterWordButton('FILTER_MEMORIZED')}>
                    <Text style ={this.highLightButton('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>this.filterWordButton('FILTER_NEED_PRACTICE')}>
                    <Text style ={this.highLightButton('NEED_PRACTICE')}>NEED_PRACTICE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'orange',
        height: 65,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around'
    }
})

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords
    }
}

export default connect(mapStateToProps)(Filter)
