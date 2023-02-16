import { useEffect } from "react";
import "./Logout.css";
import store from "../../../Redux/Store";
import { loggedOut } from "../../../Redux/UserAppState";
import { useNavigate } from "react-router-dom";
import { removeCompanies, removeCustomers } from "../../../Redux/AdminAppState";
import { removeCoupons } from "../../../Redux/CompanyAppState";
import { removeCustomerCoupons } from "../../../Redux/CustomerAppState";

function Logout(): JSX.Element {
    const navigate = useNavigate();
    useEffect(() => {
        store.dispatch(loggedOut());
        store.dispatch(removeCompanies());
        store.dispatch(removeCustomers());
        store.dispatch(removeCoupons());
        store.dispatch(removeCustomerCoupons());
        navigate("/login");
    }, []);
    return <></>;
}

export default Logout;
