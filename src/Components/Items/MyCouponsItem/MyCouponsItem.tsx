import { CouponModel } from "../../../Models/Model";
import "./MyCouponsItem.css";

interface MyCouponsItemProps {
    coupon: CouponModel;
}
function MyCouponsItem(props: MyCouponsItemProps): JSX.Element {
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
        </div>
    );
}

export default MyCouponsItem;
