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
export interface IUserContext {
    data: {
        FullName : string;
        Username : string;
        Email : string;
        Phone : string;
        ProfilePicture : string;
        PlayAttempt : number;
        RoleId : number;
    }
}
export interface ITokenContent {
    exp: number,
    iat: number,
    user: IUserContext
}