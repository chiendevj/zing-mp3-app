import actionTypes from './actionTypes';
import * as apis from '../../apis';

export const setCurSongId = (sid) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid
})

export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag
})

export const playAlbum = (flag) => ({
    type: actionTypes.SET_ALBUM,
    flag
})

export const setPlaylist = (songs) => ({
    type: actionTypes.PLAYLIST,
    songs
})


// export const fetchDetailAlbum = (pid) => async (dispatch) => {
//     try {
//         const response = await apis.apiGetDetailPlaylist(pid);
//         if (response?.data.err === 0) {
//             dispatch({
//                 type: actionTypes.PLAYLIST,
//                 songsData: response.data.data
//             });
//         } else {
//             dispatch({
//                 type: actionTypes.PLAYLIST,
//                 songsData: null
//             });
//         }
//     } catch (error) {
//         dispatch({
//             type: actionTypes.PLAYLIST,
//             songsData: null
//         });
//     }
// };
