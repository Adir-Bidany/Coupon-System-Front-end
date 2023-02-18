import axios, { AxiosResponse } from "axios";
import {
    CompanyModel,
    CompanyPayloadModel,
    CompanyUpdateModel,
    CouponModel,
    CustomerModel,
    CustomerPayloadModel,
    CustomerUpdateModel,
} from "../Models/Model";
import store from "../Redux/Store";
import global from "./ConstantService";

class AdminWebApi {
    public addCompany = (
        company: CompanyPayloadModel
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/companies";
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.post<any>(url, company, {
            headers,
        });
    };
    public addCustomer = (
        customer: CustomerPayloadModel
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/customers";
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.post<any>(url, customer, {
            headers,
        });
    };
    public deleteCustomer = (
        customerId: number
    ): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/customers" + "/" + customerId;
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.delete<any>(url, {
            headers,
        });
    };
    public deleteCompany = (companyId: number): Promise<AxiosResponse<any>> => {
        const url = global.urls.admin + "/companies" + "/" + companyId;
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.delete<any>(url, {
            headers,
        });
    };

    public getSingleCompany(
        companyId: number
    ): Promise<AxiosResponse<CompanyModel>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        const url = global.urls.admin + "/companies/" + companyId;

        return axios.get<CompanyModel>(url, {
            headers,
        });
    }

    public getSingleCustomer(
        customerId: number
    ): Promise<AxiosResponse<CustomerModel>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.get<CustomerModel>(
            global.urls.admin + "/customers/" + customerId,
            {
                headers,
            }
        );
    }

    public getAllCompanies(): Promise<AxiosResponse<CompanyModel[]>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.get<CompanyModel[]>(global.urls.admin + "/companies", {
            headers,
        });
    }

    public getAllCoupons(): Promise<AxiosResponse<CouponModel[]>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.get<CouponModel[]>(global.urls.admin + "/coupons", {
            headers,
        });
    }

    public myCustomers(): Promise<AxiosResponse<CustomerModel[]>> {
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.get<CustomerModel[]>(global.urls.admin + "/customers", {
            headers,
        });
    }

    public updateCompany = (
        companyId: number,
        company: CompanyUpdateModel
    ): Promise<AxiosResponse<CompanyModel>> => {
        const url = global.urls.admin + "/companies/" + companyId;
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.put<CompanyModel>(url, company, {
            headers,
        });
    };
    public updateCustomer = (
        customerId: number,
        customer: CustomerUpdateModel
    ): Promise<AxiosResponse<CustomerModel>> => {
        const url = global.urls.admin + "/customers/" + customerId;
        const token = store.getState().userReducer.user.token;
        const headers = { authorization: token };
        return axios.put<CustomerModel>(url, customer, {
            headers,
        });
    };
}

const adminWebApi = new AdminWebApi();
export default adminWebApi;
