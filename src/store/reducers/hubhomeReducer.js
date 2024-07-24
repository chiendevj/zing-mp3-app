import actionTypes from '../actions/actionTypes';

const initState = {
    banners: [],
    featured: [],
    nations: [],
    topTopic: [],
    hubPlaylists: {},

};

const hubHomeReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HUB_HOME:
            return {
                ...state,
                banners: action.hubHomeData?.banners || [],
                featured: action.hubHomeData?.featured || [],
                nations: action.hubHomeData?.nations || [],
                topTopic: action.hubHomeData?.topic || [],
                hubPlaylists: action.hubHomeData?.genre || {}
            };

        default:
            return state;
    }
};

export default hubHomeReducer;
