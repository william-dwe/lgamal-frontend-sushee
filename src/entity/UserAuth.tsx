export interface IAuthReqLogin {
    identifier: string;
    password: string;
}
export interface IAuthReqRegister {
    fullName: string;
    email: string;
    phone: string
    username: string;
    password: string;
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

export interface IAuthReqRegister {
    fullName: string;
    email: string;
    username: string;
    password: string;
}

export interface IAuthReqEditProfile {
    fullName: string;
    phone: string;
    email: string;
    password: string;
}