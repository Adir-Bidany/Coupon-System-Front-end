import axios, { AxiosResponse } from "axios";
import { CouponModel, CouponPayloadModel } from "../Models/Model";
import store from "../Redux/Store";
import global from "./ConstantService";

class CompanyWebApi {
    public addCoupon = (
        coupon: CouponPayloadModel
    ): Promise<AxiosResponse<any>> => {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        const url = global.urls.company + "/" + token + "/coupons";
        return axios.post<any>(url, coupon, { headers });
    };

    public deleteCoupon = (couponId: number): Promise<AxiosResponse<any>> => {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        const url = global.urls.company + "/" + token + "/coupons/" + couponId;
        return axios.delete<any>(url, { headers });
    };

    public getAllCompanyCoupons(
    ): Promise<AxiosResponse<CouponModel[]>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        const url = global.urls.company + "/" + token + "/coupons";
        return axios.get<CouponModel[]>(url, { headers });
    }

    public getSingleCoupon(
        couponId: number
    ): Promise<AxiosResponse<CouponModel>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        const url = global.urls.company + "/coupons/" + couponId;
        return axios.get<CouponModel>(url, { headers });
    }

    public updateCoupon = (
        couponId: number,
        coupon: CouponPayloadModel
    ): Promise<AxiosResponse<CouponModel>> => {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        const url = global.urls.company + "/" + token + "/coupons/" + couponId;
        return axios.put<CouponModel>(url, coupon, { headers });
    };
}
const companyWebApi = new CompanyWebApi();
export default companyWebApi;
