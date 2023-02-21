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
        const url = global.urls.customer + "/" + token + "/coupons";
        return axios.get<CouponModel[]>(url, { headers });
    }

    public couponsList(): Promise<AxiosResponse<CouponModel[]>> {
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        const url = global.urls.admin + "/coupons";
        return axios.get<CouponModel[]>(url, {
            headers,
        });
    }

    public purchaseCoupon = (
        token: string,
        couponId: number
    ): Promise<AxiosResponse<any>> => {
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        const url = global.urls.customer + "/"+token+"/coupons/" + couponId;
        return axios.post<any>(url, null, { headers });
    };
}
const customerWebApi = new CustomerWebApi();
export default customerWebApi;
