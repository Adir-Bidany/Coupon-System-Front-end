import { useState, useEffect } from "react";
import { CouponModel } from "../../../../Models/Model";
import store from "../../../../Redux/Store";
import customerWebApi from "../../../../Services/CustomerWebApi";
import notify from "../../../../Services/ErrorMSG";
import MyCouponsItem from "../../../Items/MyCouponsItem/MyCouponsItem";
import "./MyCouponsArea.css";

function MyCouponsArea(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    const[user,setUser]=useState(store.getState().userReducer.user)
    useEffect(() => {
        customerWebApi
            .getCustomerPurchaseCoupons(user.token)
            .then((res) => setCoupons(res.data))
            .catch((err) => notify.error(err));
    },[]);
    return (
        <div>
            <h1 className="MyCouponsAreaH1">My Coupons</h1>
            <div className="MyCouponsArea">
                {coupons.map((c, idx) => (
                    <MyCouponsItem key={"c" + idx} coupon={c} />
                ))}
            </div>
        </div>
    );
}

export default MyCouponsArea;
