import React from 'react'
import "./index.scss"
import { selectCartToggle, setCartToggle } from '../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart(): JSX.Element {
    const dispatch = useDispatch()
    const cartToggle = useSelector(selectCartToggle)

    const handleOpenCart = ((e: any) => {
        dispatch(setCartToggle(!cartToggle))
    })

    return (
        <div className='cart'>
            <button className="btn btn-outline-success cart-toggle" onClick={handleOpenCart}>Cart</button>
        </div>
    )
}