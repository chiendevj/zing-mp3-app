import actionTypes from '../actions/actionTypes';

const initState = {
    banner: [],
    hEditorThemes: [],
    releaseList: [],
    rankingReleaseList: [],
    zingchartBanners: [],
    top100: [],
    albumHot: [],
    chart: {},
    rank: [],
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
                    action.homeData?.find(item => item.sectionId === 'hSeasonTheme') || [],
                    action.homeData?.find(item => item.sectionId === 'hSeasonTheme1') || [],
                    action.homeData?.find(item => item.sectionId === 'hSeasonTheme2') || [],
                    action.homeData?.find(item => item.sectionId === 'hSeasonTheme3') || [],
                    action.homeData?.find(item => item.sectionId === 'hSeasonTheme4') || [],
                    action.homeData?.find(item => item.sectionId === 'hSeasonTheme5') || [],
                ],
                releaseList: action.homeData?.find(item => item.sectionType === 'new-release') || [],
                rankingReleaseList: action.homeData?.find(item => item.sectionId === 'hNewrelease') || [],
                zingchartBanners: action.homeData?.find(item => item.sectionType === 'weekChart').items || [],
                top100: action.homeData?.find(item => item.sectionId === 'h100') || [],
                albumHot: action.homeData?.find(item => item.sectionId === 'hAlbum') || [],
                chart: action.homeData?.find(item => item.sectionId === 'hZC')?.chart || {},
                rank: action.homeData?.find(item => item.sectionId === 'hZC')?.items || [],

            };

        default:
            return state;
    }
};

export default appReducer;
