export interface IOrderReqBody {
    cart_id_list: number[],
    payment_option_id: number,
}

export interface IPaymentOption {
    id: number,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    payment_name: string,
}

export interface IPaymentOptionResBody {
    payment_options: IPaymentOption[]
}