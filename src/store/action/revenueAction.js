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

export const filteredData = value => {
    return dispatch => {
        dispatch({type: revenueReducerConstant.FILTERED_DATA, value});
    }
}