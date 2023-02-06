import axios, { AxiosResponse } from "axios";
import { CouponModel, CouponPayloadModel } from "../Models/Model";
import global from "./ConstantService";

class CompanyWebApi {
    public addCoupon = (
        token:string,
        coupon: CouponPayloadModel
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.company + "/v2/" + token + "/coupons";
        console.log(url);
        return axios.post<any>(url, coupon);
    };

    public deleteCoupon = (couponId: number): Promise<AxiosResponse<any>> => {
        const url = global.urls.company + "/coupons/" + couponId;
        console.log(url);
        return axios.delete<any>(url);
    };

    public getAllCompanyCoupons(
        token: string
    ): Promise<AxiosResponse<CouponModel[]>> {
        return axios.get<CouponModel[]>(
            global.urls.company + "/token/" + token + "/coupons"
        );
    }

    public updateCoupon = (
        companyId: number,
        couponId: number,
        coupon: CouponPayloadModel
    ): Promise<AxiosResponse<CouponModel>> => {
        const url = global.urls.company +"/"+ companyId + "/coupons/" + couponId;
        console.log(url);
        return axios.put<CouponModel>(url, coupon);
    };
}
const companyWebApi = new CompanyWebApi();
export default companyWebApi;
