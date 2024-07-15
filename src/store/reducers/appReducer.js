// reducers/appReducer.js
import actionTypes from '../actions/actionTypes';

const initState = {
    banner: [],
    hEditorThemes: [],
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || [],
                hEditorThemes: [
                    action.homeData?.find(item => item.sectionId === 'hEditorTheme') || [],
                    action.homeData?.find(item => item.sectionId === 'hEditorTheme1') || [],
                    action.homeData?.find(item => item.sectionId === 'hEditorTheme2') || [],
                    action.homeData?.find(item => item.sectionId === 'hEditorTheme3') || [],
                    action.homeData?.find(item => item.sectionId === 'hEditorTheme4') || [],
                    action.homeData?.find(item => item.sectionId === 'hEditorTheme5') || [],
                ],
            };

        default:
            return state;
    }
};

export default appReducer;
