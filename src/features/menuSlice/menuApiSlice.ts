import { IRes } from "../../entity";
import { IMenuLists, IMenuQuery, IPromotionLists } from "../../entity/Menus";
import { apiSlices } from "../../app/api/apiSlice";

export const menuApiSlice = apiSlices.injectEndpoints({
    endpoints: builder => ({
        menus: builder.query<IRes<IMenuLists>, IMenuQuery>({
            query: (args) => {
                return ({
                    url: '/menus',
                    params: args
                })
            },
            providesTags: ['Menu']
        }),
        promotions: builder.query<IRes<IPromotionLists>, void>({
            query: () => ({
                url: '/promotions'
            }),
            providesTags: ['Menu']
        }),
    })
})

export const {
    useMenusQuery,
    usePromotionsQuery
} = menuApiSlice