import { IRes } from "../../entity";
import { apiSlices } from "../../app/api/apiSlice";
import { ICartLists } from "../../entity/Carts";

export const cartApiSlice = apiSlices.injectEndpoints({
    endpoints: builder => ({
        carts: builder.query<IRes<ICartLists>, void>({
            query: () => {
                return ({
                    url: '/carts'
                })
            },
            providesTags: ['Cart']
        }),
    })
})

export const {
    useCartsQuery,
} = cartApiSlice