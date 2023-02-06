import { useNavigate, useParams } from "react-router-dom";
import "./DeleteCoupon.css";
import axios from "axios";
import notify from "../../../../Services/ErrorMSG";
import global from "../../../../Services/ConstantService";

function DeleteCoupon(): JSX.Element {
    const navigate = useNavigate();

   const params=useParams();
   const couponId=+(params.id || 0);

   const cancel=()=>{
    navigate("/companyCoupons")
   }
    const deleteCoupon = async () => {
        await axios.delete<any>(global.urls.company+"/coupons/"+couponId)
            .then((res) => {
                notify.success("Coupon deleted");
                navigate("/companyCoupons");
            })
            .catch((err) => {
                notify.error(err);
            });
    };

    // const deleteCoupon = async (obj: DeleteCouponModel) => {
    //     await companyWebApi
    //         .deleteCoupon(obj.couponId)
    //         .then((res) => {
    //             notify.success("Coupon deleted");
    //             navigate("/companyCoupons");
    //         })
    //         .catch((err) => {
    //             notify.error(err);
    //         });
    // };
    return (
        <div className="DeleteCoupon col">
            <h1>Delete Coupon</h1>

            <h2>are you sure coupon #{couponId}</h2>
            <button onClick={cancel} >
                cancel
            </button>
            <button onClick={deleteCoupon} >
                yes
            </button>
        </div>
    );
}

export default DeleteCoupon;
