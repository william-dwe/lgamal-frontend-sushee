import { IAuthReqEditProfile, IUserContext } from "../../entity";
import { apiSlices } from "../../app/api/apiSlice";

export const userApiSlice = apiSlices.injectEndpoints({
    endpoints: builder => ({
        profile: builder.query<IUserContext, void>({
            query: () => ({
                url: '/users/me'
            }),
            keepUnusedDataFor: 60,
        }),
        editProfile: builder.mutation<any, any>({
            query: (payload) => ({
                url: '/users/me',
                method: 'POST',
                body: payload
            })
        })
    })
})

export const {
    useProfileQuery,
    useEditProfileMutation
} = userApiSlice