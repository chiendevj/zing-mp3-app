import actionTypes from '../actions/actionTypes';

const initState = {
    rank: null,
    chart: null,
    promotes: null,
    weekCharts: null,
    newReleaseChart: null,
};

const chartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ZING_CHART:
            return {
                ...state,
                rank:action.homeChartData?.RTChart?.items || [],        
                chart: action.homeChartData?.RTChart?.chart || {},
                promotes: action.homeChartData?.RTChart?.promotes || [],
                weekCharts: [
                    action.homeChartData?.weekChart.vn || {},
                    action.homeChartData?.weekChart.us || {},
                    action.homeChartData?.weekChart.korea || {},
                ],
            };
            case actionTypes.GET_NEW_RELASE:
                return {
                    ...state,
                    newReleaseChart: action.newReleaseChartData,
                };
    
        default:
            return state;
    }
};

export default chartReducer;
