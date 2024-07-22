import actionTypes from '../actions/actionTypes';

const initState = {
    banners: [],
};

const hubHomeReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HUB_HOME:
            return {
                ...state,
                banners:action.hubHomeData?.banners || [],
            };

        default:
            return state;
    }
};

export default hubHomeReducer;
