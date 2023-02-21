import { useEffect } from "react";
import "./Logout.css";
import store from "../../../Redux/Store";
import { loggedOut } from "../../../Redux/UserAppState";
import { useNavigate } from "react-router-dom";
import { removeCompanies, removeCustomers } from "../../../Redux/AdminAppState";
import { removeCompanyCoupons } from "../../../Redux/CompanyAppState";
import { removeCustomerCoupons } from "../../../Redux/CustomerAppState";

function Logout(): JSX.Element {
    const navigate = useNavigate();
    const userType = store.getState().userReducer.user.clientType;
    useEffect(() => {
        store.dispatch(loggedOut());
        if (userType == "ADMINISTRATOR") {
            store.dispatch(removeCompanies());
            store.dispatch(removeCustomers());
        }
        if (userType == "COMPANY") {
            store.dispatch(removeCompanyCoupons());
        }
        if (userType == "CUSTOMER") {
            store.dispatch(removeCustomerCoupons());
        }
        navigate("/login");
    }, []);
    return <></>;
}

export default Logout;
