import { combineReducers, createStore } from "redux";
import { companyReducer } from "./CompanyAppState";
import { couponReducer } from "./CouponAppState";
import { userReducer } from "./UserAppState";

// Multiple catsReducer
const reducers = combineReducers({
    userReducer: userReducer,
    companyReducer: companyReducer,
    couponReducer: couponReducer,
});

const store = createStore(reducers);

export default store;
