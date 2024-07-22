import actionTypes from './actionTypes';
import * as apis from '../../apis';

export const getHomeChart = () => async (dispatch) => {
    try {
        const response = await apis.apiGetHomeChart();
        
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ZING_CHART,
                homeChartData: response.data.data
            });
        } else {
            dispatch({
                type: actionTypes.GET_ZING_CHART,
                homeChartData: null
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ZING_CHART,
            homeChartData: null
        });
    }
};
