import actionTypes from '../actions/actionTypes';

const initState = {
    rank: [],
    chart: {},
};

const chartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ZING_CHART:
            return {
                ...state,
                chart: action.homeChartData?.find(item => item.sectionId === 'cZC')?.chart || {},
                rank: action.homeChartData?.find(item => item.sectionId === 'cZC')?.items || [],                
            };

        default:
            return state;
    }
};

export default chartReducer;
