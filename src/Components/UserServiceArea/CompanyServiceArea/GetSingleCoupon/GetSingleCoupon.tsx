import "./GetSingleCoupon.css";
import CouponItem from "./../../../Items/CouponItem/CouponItem";
import { CouponModel } from "../../../../Models/Model";
import { useState } from "react";
import store from "../../../../Redux/Store";
import companyWebApi from "./../../../../Services/CompanyWebApi";
import notify from "../../../../Services/ErrorMSG";

function GetSingleCoupon(): JSX.Element {
    const [coupons, setCoupons] = useState(
        store.getState().companyReducer.coupons
    );
    const [token, setToken] = useState(store.getState().userReducer.user.token);

    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<number>(0);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        await companyWebApi
            .getSingleCoupon(parseInt(event.target.value))
            .then((res) => {
                console.log(res);
                notify.success("coupon found");
            })
            .catch((err) => {
                notify.error(err);
            });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOutputValue(parseInt(inputValue));
    };

    const couponToShow: CouponModel[] = coupons.filter(
        (c) => c.id === outputValue
    );
    return (
        <div className="GetSingleCoupon col">
            <h1>Find Coupon</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {couponToShow.map((c, idx) => (
                    <CouponItem key={"c" + idx} coupon={c} />
                ))}
            </div>
        </div>
    );
}

export default GetSingleCoupon;
