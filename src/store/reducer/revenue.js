import { revenueReducerConstant } from "../reducerConstant";

const initialState = {
    revenueData: '',
    filterType:''
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
        default:
            return state;
    }
}

export default revenueReducer;