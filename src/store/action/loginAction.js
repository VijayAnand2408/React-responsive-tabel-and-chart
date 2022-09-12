import { userReducerConstant } from "../reducerConstant";

export const setUserName = value => {
    return dispatch => {
        dispatch({type: userReducerConstant.USER_NAME, value});
    }
}