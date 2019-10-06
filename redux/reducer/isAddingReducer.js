
const isAddingReducer = (state= false, action) => {
    if (action.type === 'IS_ADDING') return !state;
    return state;
}

export default isAddingReducer;