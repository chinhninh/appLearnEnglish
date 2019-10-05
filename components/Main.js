import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import Word from './Word'

class Main extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor: 'green'}}>
                <FlatList
                    data = {this.props.myWords}
                    renderItem = {({item}) => <Word myWord = {item}/>}
                    keyExtractor = {this.props.myWords.id}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        myFilterStatus: state.filterStatus,
        myWords: state.arrWords
    }
}

export default connect(mapStateToProps)(Main)
