import { revenueReducerConstant } from "../reducerConstant";

export const storeRevenueData = value => {
    return dispatch => {
        dispatch({type: revenueReducerConstant.REVENUE_DATA, value});
    }
}

export const revenueTypeFilter = value => {
    return dispatch => {
        dispatch({type: revenueReducerConstant.REVENUE_TYPE_FILTER, value});
    }
}