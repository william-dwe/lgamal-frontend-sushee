export interface IAuthReqLogin {
    identifier: string;
    password: string;
}
export interface IAuthReqRegister {
    fullName: string;
    email: string;
    username: string;
    password: string;
}

export interface IRes {
    code: string;
    message: string;
    data: any;
}