import actionTypes from './actionTypes';
import * as apis from '../../apis';

export const getHubHome = () => async (dispatch) => {
    try {
        const response = await apis.apiGetHubHome();
        
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_HUB_HOME,
                hubHomeData: response.data.data
            });
        } else {
            dispatch({
                type: actionTypes.GET_HUB_HOME,
                hubHomeData: null
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HUB_HOME,
            hubHomeData: null
        });
    }
};
