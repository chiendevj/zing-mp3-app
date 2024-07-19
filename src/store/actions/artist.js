import actionTypes from './actionTypes';
import * as apis from '../../apis';

export const getArtist = (name) => async (dispatch) => {
    try {
        const response = await apis.apiGetArtist(name);
        // console.log(response.data.data);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ARTIST,
                artistData: response.data.data
            });
        } else {
            dispatch({
                type: actionTypes.GET_ARTIST,
                artistData: null
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ARTIST,
            artistData: null
        });
    }
};
