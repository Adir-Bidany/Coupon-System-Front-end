import { BsCashCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./PurchaseCouponItem.css";
import { CouponModel } from "../../../Models/Model";
import customerWebApi from "../../../Services/CustomerWebApi";
import notify from "../../../Services/ErrorMSG";

interface PurchaseCouponItemProps {
    coupon: CouponModel;
}

function PurchaseCouponItem(props: PurchaseCouponItemProps): JSX.Element {
    const navigate = useNavigate();

    const addCouponToCustomer = async () => {
        await customerWebApi
            .purchaseCoupon(props.coupon.id)
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
            <span>Name: {props.coupon.company.name}</span>
            <span>Category: {props.coupon.category}</span>
            <span>Description: {props.coupon.description}</span>
            <span>Start date: {props.coupon.startDate.toString()}</span>
            <span>End date: {props.coupon.endDate.toString()}</span>
            <span>Amount: {props.coupon.amount}</span>
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
