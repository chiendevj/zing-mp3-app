import actionTypes from '../actions/actionTypes';

const initState = {
    top100: [],
};

const top100Reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_TOP100:
            return {
                ...state,
                top100: action.top100Data || [],
            };

        default:
            return state;
    }
};

export default top100Reducer;
