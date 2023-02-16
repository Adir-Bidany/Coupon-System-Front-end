import axios, { AxiosResponse } from "axios";
import { CouponModel, CouponPayloadModel } from "../Models/Model";
import store from "../Redux/Store";
import global from "./ConstantService";

class CompanyWebApi {
    public addCoupon = (
        token: string,
        coupon: CouponPayloadModel
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.company + "/v2/" + token + "/coupons";
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        return axios.post<any>(url, coupon, { headers });
    };

    public deleteCoupon = (couponId: number): Promise<AxiosResponse<any>> => {
        const url = global.urls.company + "/coupons/" + couponId;
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        return axios.delete<any>(url, { headers });
    };

    public getAllCompanyCoupons(
        token: string
    ): Promise<AxiosResponse<CouponModel[]>> {
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        return axios.get<CouponModel[]>(
            global.urls.company + "/token/" + token + "/coupons",
            { headers }
        );
    }

    public getSingleCoupon(
        couponId: number
    ): Promise<AxiosResponse<CouponModel>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.get<CouponModel>(
            global.urls.company + "/coupons/" + couponId,
            {
                headers,
            }
        );
    }

    public updateCoupon = (
        companyId: number,
        couponId: number,
        coupon: CouponPayloadModel
    ): Promise<AxiosResponse<CouponModel>> => {
        const url =
            global.urls.company + "/" + companyId + "/coupons/" + couponId;
        const token2 = store.getState().userReducer.user.token;
        const headers = { authorization: token2 };
        return axios.put<CouponModel>(url, coupon, { headers });
    };
}
const companyWebApi = new CompanyWebApi();
export default companyWebApi;
