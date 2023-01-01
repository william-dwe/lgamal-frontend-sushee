import React from 'react'
import "./index.scss"
import { selectCartToggle, setCartToggle } from '../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCartQuery } from '../../features/cartSlice/cartApiSlice';
import {BsFillCartFill} from 'react-icons/bs'

export default function Cart(): JSX.Element {
    const dispatch = useDispatch()
    const cartToggle = useSelector(selectCartToggle)
    const {data: cart, isLoading: isCartLoading } = useGetCartQuery()

    const handleOpenCart = ((e: any) => {
        dispatch(setCartToggle(!cartToggle))
    })

    return (
        <div className='cart'>
            <button className="btn cart-toggle" onClick={handleOpenCart}><BsFillCartFill/></button>
            {
                cart && cart?.data.carts.length > 0
                ? <span className="notification">{cart?.data.carts.length}</span>
                : <></>
            }
        </div>
    )
}