import actionTypes from './actionTypes';

export const setCurSongId = (sid) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid
})

export const setCurAlbumId = (aid) => ({
    type: actionTypes.SET_CUR_ALBUM_ID,
    aid
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


