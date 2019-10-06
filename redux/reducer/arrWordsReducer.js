
const arrWordsReducer = (state= [],action) => {
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

export default arrWordsReducer
