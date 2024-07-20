import actionTypes from '../actions/actionTypes';

const initState = {
    artistBasicInfo: {},
    topSongs: [],
    aAlbums: [],
    aMV: [],
    aPlaylists: [],
    aReArtist: []
};

const artistReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTIST:
            return {
                ...state,
                artistBasicInfo: {
                    'name': action.artistData?.name || null,
                    'realname': action.artistData?.realname || null,
                    'thumbnail' : action.artistData?.thumbnail || null,
                    'thumbnailM' : action.artistData?.thumbnailM || null,
                    'totalFollow' : action.artistData?.totalFollow || null,
                    'awards' : action.artistData?.awards || null,
                    'aNewRelease': action.artistData?.topAlbum || [],
                    'spotlight':  action.artistData?.spotlight || false,
                    'biography': action.artistData?.biography || '',
                    'national': action.artistData?.national || null,

                },
                topSongs: action.artistData?.sections.find(item => item.sectionId === 'aSongs') || [],
                aAlbums: [
                    action.artistData?.sections.find(item => item.sectionId === 'aSingle') || [],
                    action.artistData?.sections.find(item => item.sectionId === 'aAlbum') || [],
                ],
                aMV: action.artistData?.sections.find(item => item.sectionId === 'aMV') || [],
                aPlaylists: [
                    action.artistData?.sections.find(item => item.title === 'Tuyển tập') || [],
                    action.artistData?.sections.find(item => item.title === 'Xuất hiện trong') || [],
                ],
                aReArtist: action.artistData?.sections.find(item => item.sectionId === 'aReArtist') || [],
            };

        default:
            return state;
    }
};

export default artistReducer;
