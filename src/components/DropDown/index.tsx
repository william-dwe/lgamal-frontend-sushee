import React from 'react'
import { ICoupon } from '../../entity/Carts'
import './index.scss' //todo: styling

type Props = {
    name: string,
    handle: ((e:any) => void)
    coupons: ICoupon[]
}

function DropDown(props: Props): JSX.Element {
    return (
        props.coupons
        ? <select className='dropdown' name={props.name} id={props.name} onChange={props.handle}>
            <option value="">(Choose your coupon)</option>
            {
                props.coupons.map((val, i) => {
                    return <option value={val.coupon_code} key={i}>Cashback IDR {val.discount_amount.toLocaleString('id-ID')}</option>
                })
            }
        </select>
        : <></>
    )
}

export default DropDown