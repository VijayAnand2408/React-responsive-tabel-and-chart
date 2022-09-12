import { userReducerConstant } from "../reducerConstant";

const initialState = {
    userName: ''
};

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case userReducerConstant.USER_NAME:
            return {
                ...state,
                userName: action.value
            }
        default:
            return state;
    }
}

export default loginReducer;