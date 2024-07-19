import actionTypes from '../actions/actionTypes';

const initState = {
    artistBasicInfo: {},
    topSongs: [],
    aAlbums: [],
    aMV: [],
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
                    'aNewRelease':  action.artistData?.topAlbum || [],
                },
                topSongs: action.artistData?.sections.find(item => item.sectionId === 'aSongs') || [],
                aAlbums: [
                    action.artistData?.sections.find(item => item.sectionId === 'aSingle') || [],
                    action.artistData?.sections.find(item => item.sectionId === 'aAlbum') || [],
                ],
                aMV: action.artistData?.sections.find(item => item.sectionId === 'aMV') || [],
            };

        default:
            return state;
    }
};

export default artistReducer;
