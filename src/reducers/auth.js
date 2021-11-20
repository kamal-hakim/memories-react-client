import { AUTH, LOGOUT } from "../actions/actionTypes";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return state;
        case LOGOUT:
            localStorage.removeItem('profile');
            state = { ...state, authData: null};
            return state;
        default:
            return state;
    }
}

export default authReducer;