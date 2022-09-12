import { revenueReducerConstant } from "../reducerConstant";

const initialState = {
    revenueData: '',
    filterType:'',
    filterData:[]
};

const revenueReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case revenueReducerConstant.REVENUE_DATA:
            return {
                ...state,
                revenueData: action.value
            };
            case revenueReducerConstant.REVENUE_TYPE_FILTER:
                return {
                    ...state,
                    filterType: action.value
                };
                case revenueReducerConstant.FILTERED_DATA:
                    return {
                        ...state,
                        filterData: action.value
                    };
        default:
            return state;
    }
}

export default revenueReducer;