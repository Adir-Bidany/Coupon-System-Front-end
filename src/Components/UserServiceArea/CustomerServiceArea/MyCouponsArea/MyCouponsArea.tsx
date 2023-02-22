import { useState, useEffect } from "react";
import { CouponModel } from "../../../../Models/Model";
import { gotAllCustomerPurchasedCouponsAction } from "../../../../Redux/CustomerAppState";
import store from "../../../../Redux/Store";
import customerWebApi from "../../../../Services/CustomerWebApi";
import notify from "../../../../Services/ErrorMSG";
import MyCouponsItem from "../../../Items/MyCouponsItem/MyCouponsItem";
import "./MyCouponsArea.css";

function MyCouponsArea(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    useEffect(() => {
        customerWebApi
            .getCustomerPurchaseCoupons()
            .then((res) => {
                store.dispatch(gotAllCustomerPurchasedCouponsAction(res.data));
                setCoupons(res.data);
            })
            .catch((err) => notify.error(err));
    }, []);
    return (
        <div className="MyCouponsArea">
            {coupons.map((c, idx) => (
                <MyCouponsItem key={"c" + idx} coupon={c} />
            ))}
        </div>
    );
}

export default MyCouponsArea;
