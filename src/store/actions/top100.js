import actionTypes from './actionTypes';
import * as apis from '../../apis';

export const getTop100 = () => async (dispatch) => {
    try {
        const response = await apis.apiGetTop100();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_TOP100,
                top100Data: response.data.data
            });
        } else {
            dispatch({
                type: actionTypes.GET_TOP100,
                top100Data: null
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_TOP100,
            top100Data: null
        });
    }
};