import axios, { AxiosResponse } from "axios";
import { CouponModel } from "../Models/Model";
import global from "./ConstantService";

class CustomerWebApi {
    public getCustomerPurchaseCoupons(
        token: string
    ): Promise<AxiosResponse<CouponModel[]>> {
        return axios.get<CouponModel[]>(
            global.urls.customer + "/token/" + token + "/coupons"
        );
    }

    public couponsList(): Promise<AxiosResponse<CouponModel[]>> {
        return axios.get<CouponModel[]>(global.urls.admin + "/coupons"
        );
    }

    public purchaseCoupon(
        token: string,
        couponId: number
    ): Promise<AxiosResponse<CouponModel[]>> {
        return axios.post<CouponModel[]>(
            global.urls.customer + "/v2/" + token + "/coupons/" + couponId
        );
    }
}
const customerWebApi = new CustomerWebApi();
export default customerWebApi;
