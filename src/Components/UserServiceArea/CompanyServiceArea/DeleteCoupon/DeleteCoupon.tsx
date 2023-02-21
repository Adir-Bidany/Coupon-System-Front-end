import { useNavigate, useParams } from "react-router-dom";
import "./DeleteCoupon.css";
import notify from "../../../../Services/ErrorMSG";
import companyWebApi from "../../../../Services/CompanyWebApi";

function DeleteCoupon(): JSX.Element {
    const navigate = useNavigate();

    const params = useParams();
    const couponId = +(params.id || 0);

    const cancel = () => {
        navigate("/companyCoupons");
    };
    const deleteCoupon = async () => {
        await companyWebApi
            .deleteCoupon(couponId)
            .then((res) => {
                notify.success("Coupon deleted");
                navigate("/companyCoupons");
            })
            .catch((err) => {
                notify.error(err);
            });
    };

    return (
        <div className="DeleteCoupon col">
            <h1>Delete Coupon</h1>

            <h2 className="redColor">
                Are you sure you want to delete coupon #{couponId}
            </h2>
            <div className="deleteGap row">
                <button className="delete" onClick={cancel}>
                    cancel
                </button>
                <button className="delete redColor" onClick={deleteCoupon}>
                    delete
                </button>
            </div>
        </div>
    );
}

export default DeleteCoupon;
