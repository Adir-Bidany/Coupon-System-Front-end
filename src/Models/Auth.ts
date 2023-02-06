export interface LoginModel {
    clientType: string;
    email: string;
    password: string;
}

export interface RegisterModel {
    email: string;
    password: string;
    confirm: string;
}

export interface Credentials {
    clientType: string;
    email: string;
    password: string;
}

export interface User {
    token: string;
    email: string;
}
