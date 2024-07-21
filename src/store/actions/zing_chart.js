import actionTypes from './actionTypes';
import * as apis from '../../apis';

export const getHomeChart = () => async (dispatch) => {
    try {
        const response = await apis.apiGetHomeChart();
 
        if (response?.err === 0) {
            dispatch({
                type: actionTypes.ZING_CHART,
                homeChartData: response.data
            });
       
        } else {
            dispatch({
                type: actionTypes.ZING_CHART,
                homeChartData: null
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ZING_CHART,
            homeChartData: null
        });
    }
};
