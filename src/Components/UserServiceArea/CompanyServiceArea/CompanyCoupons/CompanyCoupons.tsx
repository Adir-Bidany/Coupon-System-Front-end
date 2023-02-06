import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CouponModel } from "../../../../Models/Model";
import store from "../../../../Redux/Store";
import companyWebApi from "../../../../Services/CompanyWebApi";
import notify from "../../../../Services/ErrorMSG";
import CouponItem from "../../../Items/CouponItem/CouponItem";

import "./CompanyCoupons.css";

function CompanyCoupons(): JSX.Element {
    const navigate = useNavigate();
    const addCoupon = () => {
        navigate("/addCoupon");
    };
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    const[user,setUser]=useState(store.getState().userReducer.user)
    useEffect(() => {
        companyWebApi
            .getAllCompanyCoupons(user.token)
            .then((res) => setCoupons(res.data))
            .catch((err) => notify.error(err));
    },[]);
    return (
        <div>
            <h1 className="CompanyCouponsH1">Company Coupons</h1>

            <div className="NavigateCoupon">
                <button className="Button" onClick={addCoupon}>
                    Add Coupon
                </button>
                <button className="Button">Find Coupon</button>
            </div>

            <div className="CompanyCoupons">
                {coupons.map((c, idx) => (
                    <CouponItem key={"c" + idx} coupon={c} />
                ))}
            </div>
        </div>
    );
}

export default CompanyCoupons;
