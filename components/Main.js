import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import Word from './Word'
import Filter from './Filter'

class Main extends Component {
    getWordList(){
        const {myFilterStatus,myWords} = this.props;
        if (myFilterStatus === 'MEMORIZED') return myWords.filter(e => e.memorized);
        if (myFilterStatus === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
        return myWords;
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: 'green'}}>
                <FlatList
                    data = {this.getWordList()}
                    renderItem = {({item}) => <Word myWord = {item}/>}
                    keyExtractor = {this.props.myWords.id}
                />
                <Filter/>
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
