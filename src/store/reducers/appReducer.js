import actionTypes from "../action/actionTypes";

const initStare = {
    homeData: [],
    test: 'Hello 123',
    d: 'dsfbg'
}
const appReducer = (state = initStare, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state
    
        default:
            return state
    }
}

export default appReducer