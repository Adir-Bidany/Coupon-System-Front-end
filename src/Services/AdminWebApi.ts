import axios, { AxiosResponse } from "axios";
import {
    CompanyModel,
    CompanyPayloadModel,
    CompanyUpdateModel,
    CouponModel,
    CustomerModel,
    CustomerPayloadModel,
} from "../Models/Model";
import global from "./ConstantService";

class AdminWebApi {
    public addCompany = (
        company: CompanyPayloadModel
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/companies";
        console.log(url);
        return axios.post<any>(url, company);
    };
    public addCustomer = (
        customer: CustomerPayloadModel
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/customers";
        console.log(url);
        return axios.post<any>(url, customer);
    };
    public deleteCustomer = (
        customerId: number
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/customers" + "/" + customerId;
        console.log(url);
        return axios.delete<any>(url);
    };
    public deleteCompany = (companyId: number): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/companies" + "/" + companyId;
        console.log(url);
        return axios.delete<any>(url);
    };

    public getAllCompanies(): Promise<AxiosResponse<CompanyModel[]>> {
        return axios.get<CompanyModel[]>(global.urls.admin + "/companies");
    }

    public getAllCoupons(): Promise<AxiosResponse<CouponModel[]>> {
        return axios.get<CouponModel[]>(global.urls.admin + "/coupons");
    }

    public myCustomers(): Promise<AxiosResponse<CustomerModel[]>> {
        return axios.get<CustomerModel[]>(global.urls.admin + "/customers");
    }

    public updateCompany = (
        companyId: number,
        company: CompanyUpdateModel
    ): Promise<AxiosResponse<CompanyModel>> => {
        const url = global.urls.admin + "/v2/companies/" + companyId;
        console.log(url);
        return axios.put<CompanyModel>(url, company);
    };
}

const adminWebApi = new AdminWebApi();
export default adminWebApi;
