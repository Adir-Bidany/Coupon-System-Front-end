import { BsCashCoin } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import "./PurchaseCouponItem.css";
import { CouponModel } from "../../../Models/Model";
import customerWebApi from "../../../Services/CustomerWebApi";
import notify from "../../../Services/ErrorMSG";
import store from "../../../Redux/Store";
import { useState } from "react";

interface PurchaseCouponItemProps {
    coupon: CouponModel;
}

function PurchaseCouponItem(props: PurchaseCouponItemProps): JSX.Element {
    const [user,setUser]=useState(store.getState().userReducer.user)
    const navigate = useNavigate();

    const addCouponToCustomer = async () => {
        
        await customerWebApi
            .purchaseCoupon(user.token, props.coupon.id)
            .then((res) => {
                notify.success("coupon purchased");
                navigate("/myCoupons");
            })
            .catch((arr) => {
                notify.error(arr);
            });
    };

    return (
        <div className="card">
            <img src={props.coupon.image} alt="Coupon" />
            <h1>{props.coupon.title}</h1>
            <p className="price">${props.coupon.price}</p>
            <span>name: {props.coupon.company.name}</span>
            <span>category: {props.coupon.category}</span>
            <span>description: {props.coupon.description}</span>
            <span>start date: {props.coupon.startDate.toString()}</span>
            <span>end date: {props.coupon.endDate.toString()}</span>
            <span>amount: {props.coupon.amount}</span>
            <div className="divButton">
                <button className="PurchaseB" onClick={addCouponToCustomer}>
                    Purchase now &nbsp;
                    <BsCashCoin size={24} />
                </button>
            </div>
        </div>
    );
}

export default PurchaseCouponItem;
