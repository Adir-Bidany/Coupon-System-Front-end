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
            <span>name: {props.coupon.company.name}</span>
            <span>category: {props.coupon.category}</span>
            <span>description: {props.coupon.description}</span>
            <span>start date: {props.coupon.startDate.toString()}</span>
            <span>end date: {props.coupon.endDate.toString()}</span>
            <span>amount: {props.coupon.amount}</span>
        </div>
    );
}

export default MyCouponsItem;
