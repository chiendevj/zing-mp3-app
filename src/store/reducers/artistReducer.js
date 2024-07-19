import actionTypes from '../actions/actionTypes';

const initState = {
    artistBasicInfo: {},
    topSongs: [],
    aAlbums: [],
};

const artistReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTIST:
            return {
                ...state,
                artistBasicInfo: {
                    'name': action.artistData?.name || null,
                    'thumbnail' : action.artistData?.thumbnail || null,
                    'totalFollow' : action.artistData?.totalFollow || null,
                    'awards' : action.artistData?.awards || null,
                },
                topSongs: action.artistData?.sections.find(item => item.sectionId === 'aSongs') || [],
                aAlbums: [
                    action.artistData?.sections.find(item => item.sectionId === 'aSingle') || [],
                    action.artistData?.sections.find(item => item.sectionId === 'aAlbum') || [],
                ],
            };

        default:
            return state;
    }
};

export default artistReducer;
