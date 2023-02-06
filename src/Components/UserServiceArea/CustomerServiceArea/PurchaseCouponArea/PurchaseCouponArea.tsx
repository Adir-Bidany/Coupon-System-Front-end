import { SetStateAction, useEffect, useState } from "react";
import "./PurchaseCouponArea.css";
import { CouponModel } from "../../../../Models/Model";
import customerWebApi from "../../../../Services/CustomerWebApi";
import notify from "../../../../Services/ErrorMSG";
import PurchaseCouponItem from "../../../Items/PurchaseCouponItem/PurchaseCouponItem";
import FilterCategory from "../FilterCategory/FilterCategory";
// import Card from "../../SharedArea/Card/Card";

function PurchaseCouponArea(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    useEffect(() => {
        customerWebApi
            .couponsList()
            .then((res) => setCoupons(res.data))
            .catch((err) => notify.error(err));
    },[]);

    let [filterTextValue, setFilterTextValue] = useState("All");

    let filteredCategoryList = coupons.filter((coupon) => {
        switch (filterTextValue) {
            case "FOOD":
                return coupon.category === "FOOD";
                break;

            case "FOOD":
                return coupon.category === "FOOD";
                break;
            case "RESTAURANT":
                return coupon.category === "RESTAURANT";
                break;
            case "ELECTRICITY":
                return coupon.category === "ELECTRICITY";
                break;

            default:
                return coupon;
                break;
        
        }
        // if (filterTextValue === "FOOD") {
        //     return coupon.category === "FOOD";
        // } else if (filterTextValue === "ELECTRICITY") {
        //     return coupon.category === "ELECTRICITY";
        // } else if (filterTextValue === "RESTAURANT") {
        //     return coupon.category === "RESTAURANT";
        // } else if (filterTextValue === "VACATION") {
        //     return coupon.category === "VACATION";
        // } else if (
        //     filterTextValue === "RESTAURANT" ||
        //     "FOOD" ||
        //     "ELECTRICITY"
        // ) {
        //     return coupon;
        // }
    });

    function onFilterValueSelected(filterValue: SetStateAction<string>) {
        setFilterTextValue(filterValue);
    }

    return (
        <div>
            <h1 className="PurchaseCouponAreaH1">Coupons list</h1>
            <FilterCategory filterValueSelected={onFilterValueSelected} />

            <div className="PurchaseCouponArea">
                {filteredCategoryList.map((c, idx) => (
                    <PurchaseCouponItem key={"c" + idx} coupon={c} />
                ))}
            </div>
        </div>
    );
}

export default PurchaseCouponArea;
