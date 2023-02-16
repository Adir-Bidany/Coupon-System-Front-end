import { Credentials, User } from "./../Models/Auth";
import axios, { AxiosResponse } from "axios";
import global from "./ConstantService";
class LoginWebApi {
    private authApi = global.urls.user;

    public login(credentials: Credentials): Promise<AxiosResponse<User>> {
        const url = this.authApi + "/" + "login";
        console.log(url);
        return axios.post<User>(url, credentials);
    }
}

const loginWebApi = new LoginWebApi();
export default loginWebApi;
