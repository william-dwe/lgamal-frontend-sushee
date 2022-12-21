import { apiSlices } from "../../app/api/apiSlice";
import { IAuthReqLogin, IAuthReqRegister } from "../../entity";

export const authApiSlice = apiSlices.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<any, IAuthReqLogin>({
            query: (payload) => ({
                url: '/login',
                method: 'POST',
                body: {... payload},
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
        }),
        register: builder.mutation<any, IAuthReqRegister>({
            query: (payload) => ({
                url: '/register',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
        }),
        refresh: builder.query<any, void>({
            query: () => ({
                url: '/refresh',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            keepUnusedDataFor: 60,
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useRefreshQuery
} = authApiSlice