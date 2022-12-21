import { IUserContext } from "../../entity";
import { apiSlices } from "../../app/api/apiSlice";

export const userApiSlice = apiSlices.injectEndpoints({
    endpoints: builder => ({
        profile: builder.query<IUserContext, void>({
            query: () => ({
                url: '/users/me'
            }),
            keepUnusedDataFor: 60,
        })
    })
})

export const {
    useProfileQuery
} = userApiSlice