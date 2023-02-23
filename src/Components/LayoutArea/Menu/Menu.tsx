import { useEffect, useState } from "react";
import store from "../../../Redux/Store";
import CustomLink from "../../SharedArea/CustomLink/CustomLink";
import "./Menu.css";

function Menu(): JSX.Element {
    
    const [user, setUser] = useState(store.getState().userReducer.user);
    useEffect(() => {
        return store.subscribe(() =>
            setUser(store.getState().userReducer.user)
        );
    }, []);
    return (
        <div className="Menu row">
            <CustomLink to={"home"}>Home</CustomLink>
            <CustomLink to={"about"}>About</CustomLink>
            <CustomLink to={"developer"}>Developer</CustomLink>
            
            {user.clientType === "ADMINISTRATOR" && (
                <>
                    <CustomLink to={"myCompanies"}>My companies</CustomLink>
                    <CustomLink to={"myCustomers"}>My customers</CustomLink>
                </>
            )}
            {user.clientType === "COMPANY" && (
                <>
                    <CustomLink to={"companyCoupons"}>
                        Coupons
                    </CustomLink>
                </>
            )}
            {user.clientType === "CUSTOMER" && (
                <>
                    <CustomLink to={"myCoupons"}>My coupons</CustomLink>
                    <CustomLink to={"purchase"}>Purchase Coupon</CustomLink>
                </>
            )}
        </div>
    );
}

export default Menu;
