import { VscTrash } from "react-icons/vsc";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./CouponItem.css";
import { CouponModel } from "../../../Models/Model";

interface CouponItemProps {
    coupon: CouponModel;
}
function CouponItem(props: CouponItemProps): JSX.Element {
    const navigate = useNavigate();

    const deleteCoupon = (couponId: number) => {
        navigate("/deleteCoupon/" + couponId);
    };
    const updateCoupon = (couponId: number) => {
        navigate("/updateCoupon/" + couponId);
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
                <button
                    onClick={() => deleteCoupon(props.coupon.id)}
                    className="button1"
                >
                    <VscTrash size={24} />
                </button>
                <button
                    className="button1"
                    onClick={() => updateCoupon(props.coupon.id)}
                >
                    <BiEdit size={24} />
                </button>
            </div>
        </div>
    );
}

export default CouponItem;
