import {createStore} from 'redux'
import {combineReducers} from 'redux'

const defaultArrWords =
   [
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
    ]
    
  
  
//   const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//       case 'FILTER_SHOW_ALL':
//         return {...state, filterStatus: 'SHOW_ALL'}
//       case 'FILTER_MEMORIZED':
//         return {...state, filterStatus: 'MEMORIZED'}
//       case 'FILTER_NEED_PRACTICE':
//         return {...state, filterStatus: 'NEED_PRACTICE'}
//       case 'MEMORIZED': return {
//         ...state, arrWords: state.arrWords.map(e=>{
//           if (e.id !== action.id) return e;
//         return {...e, memorized: !e.memorized}
//         })
//       }
//       case 'IS_SHOW': return {
//         ...state, arrWords: state.arrWords.map(e=>{
//           if (e.id !== action.id) return e;
//         return {...e, isShow: !e.isShow}
//         })
//       }
//       case 'IS_ADDING': 
//         return {...state, isAdding: !state.isAdding}
//       case 'ADD_WORD':
//         return {
//           ...state,
//           arrWords: [{
//             id: state.arrWords.length +1,
//             en: action.en,
//             vn: action.vn,
//             memorized: false,
//             isShow: true
//           }].concat(state.arrWords)
//         }
//         case 'DELETE':
//           return {...state, arrWords: state.arrWords.filter(e=>{
//             if (e.id !== action.id) return e;
//           })}
        
//       default:
//         break;
//     }
//     return state;
//   }

const isAddingReducer = (state= false, action) => {
    if (action.type === 'IS_ADDING') return !state;
    return state;
}

const filterStatusReducer = (state = 'SHOW_ALL',action) => {
    if (action.type === 'FILTER_SHOW_ALL') return 'SHOW_ALL';
    if (action.type === 'FILTER_MEMORIZED') return 'MEMORIZED'
    if (action.type === 'FILTER_NEED_PRACTICE') return 'NEED_PRACTICE';
    return state;
}

const arrWordsReducer = (state= defaultArrWords,action) => {
    if (action.type === 'MEMORIZED') return state.map(e=>{
        if(e.id !== action.id) return e;
        return {...e,memorized: !e.memorized}
    })
    if (action.type === 'IS_SHOW') return state.map(e=>{
        if(e.id !== action.id) return e;
        return {...e,isShow: !e.isShow}
    })
    if (action.type === 'DELETE') return state.filter(e=>{
        if(e.id !== action.id) return e;
    })
    if (action.type === 'ADD_WORD') return [{
                    id: state.length +1,
                    en: action.en,
                    vn: action.vn,
                    memorized: false,
                    isShow: true
                  }].concat(state);
    return state;
}

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
})
  
const store = createStore(reducer)

export default store;