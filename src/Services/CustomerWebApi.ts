import axios, { AxiosResponse } from "axios";
import { CouponModel } from "../Models/Model";
import store from "../Redux/Store";
import global from "./ConstantService";

class CustomerWebApi {
    public getCustomerPurchaseCoupons(
        token: string
    ): Promise<AxiosResponse<CouponModel[]>> {
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        return axios.get<CouponModel[]>(
            global.urls.customer + "/token/" + token + "/coupons",
            { headers }
        );
    }

    public couponsList(): Promise<AxiosResponse<CouponModel[]>> {
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        return axios.get<CouponModel[]>(global.urls.admin + "/coupons", {
            headers,
        });
    }

    public purchaseCoupon(
        token: string,
        couponId: number
    ): Promise<AxiosResponse<CouponModel[]>> {
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        return axios.post<CouponModel[]>(
            global.urls.customer + "/v2/" + token + "/coupons/" + couponId,
            { headers }
        );
    }
}
const customerWebApi = new CustomerWebApi();
export default customerWebApi;
