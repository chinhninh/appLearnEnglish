import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Main from './components/Main'

const defaultState ={
  arrWords : [
    {id: 1,en: 'action', vn: 'hanh dong', memorized: true, isShow: true},
    {id: 2,en: 'actor', vn: 'dien vien', memorized: false, isShow: false},
    {id: 3,en: 'activity', vn: 'hoat dong', memorized: true, isShow: false},
    {id: 4,en: 'bath', vn: 'tam', memorized: false, isShow: false},
    {id: 5,en: 'bedroom', vn: 'phong ngu', memorized: true, isShow: true},
    {id: 6,en: 'yard', vn: 'san', memorized: false, isShow: false},
    {id: 7,en: 'yesterday', vn: 'hom qua', memorized: true, isShow: true},
    {id: 8,en: 'young', vn: 'tre', memorized: true, isShow: false},
    {id: 9,en: 'zero', vn: 'so 0', memorized: false, isShow: false},
    {id: 10,en: 'abandon', vn: 'tu bo', memorized: true, isShow: false},
    {id: 11,en: 'above', vn: 'o tren', memorized: true, isShow: false},
    {id: 12,en: 'against', vn: 'phan doi', memorized: false, isShow: false},
    {id: 13,en: 'arrange', vn: 'sap xep', memorized: true, isShow: false},
    {id: 14,en: 'school', vn: 'truong hoc', memorized: true, isShow: false},
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: true
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
      return {...state, filterStatus: 'SHOW_ALL'}
    case 'FILTER_MEMORIZED':
      return {...state, filterStatus: 'MEMORIZED'}
    case 'FILTER_NEED_PRACTICE':
      return {...state, filterStatus: 'NEED_PRACTICE'}
    case 'MEMORIZED': return {
      ...state, arrWords: state.arrWords.map(e=>{
        if (e.id !== action.id) return e;
      return {...e, memorized: !e.memorized}
      })
    }
    case 'IS_SHOW': return {
      ...state, arrWords: state.arrWords.map(e=>{
        if (e.id !== action.id) return e;
      return {...e, isShow: !e.isShow}
      })
    }
      
    default:
      break;
  }
  return state;
}

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Main/>
      </Provider>
    )
  }
}

