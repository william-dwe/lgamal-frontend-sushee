import { IRes } from "../../entity";
import { apiSlices } from "../../app/api/apiSlice";
import { ICartLists, ICartPostReq } from "../../entity/Carts";
import { IOrderReqBody } from "../../entity/Order";

export const orderApiSlice = apiSlices.injectEndpoints({
    endpoints: builder => ({
        postOrders: builder.mutation<any, IOrderReqBody>({
            query: (payload) => ({
                url: "/orders",
                method: 'POST',
                body: {... payload},
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            //todo: bikin & tambahin tag order
            invalidatesTags: ['Cart']
        }),
    })
})
// next todo: bikin payment option dropdown -> state di orderslice index.
// select state -> taruh di payload slice post order ketika dipakai di component

export const {
    usePostOrdersMutation,
} = orderApiSlice