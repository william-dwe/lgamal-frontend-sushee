import React from 'react'
import "./index.scss"
import { selectCartToggle, setCartToggle } from '../../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import CartCard from '../CartCard';
import { useCartsQuery } from '../../../features/cartSlice/cartApiSlice';

export default function CartOffCanvas(): JSX.Element {
    const dispatch = useDispatch()
    const cartToggle = useSelector(selectCartToggle)

    const handleOpenCart = ((e: any) => {
        console.log("TRIGGER cart: ", cartToggle)
        dispatch(setCartToggle(!cartToggle))
    })

    const { data: cart, isLoading: isCartLoading } = useCartsQuery()

    return (
        <div className='cart-wrapper'>
            <div className={`cart-offcanvas ${cartToggle ? "cart-open" : "cart-close"}`}>
                <div className="content">
                    <button type="button" className="btn-close btn-close-white cart-toggle" aria-label="Close" onClick={handleOpenCart}></button>
                    <h2>Ready to Order?</h2>
                    <hr/>
                    <div className="container">
                        {!isCartLoading && cart
                        ? cart.data.carts.map((val, i) => {
                            return <CartCard
                                Menu={val.Menu}
                                PromotionId={val.PromotionId}
                                Quantity={val.Quantity}
                                MenuOption={val.MenuOption}
                                key={i}
                            />
                        })
                        :<></>
                    }
                    </div>
                    
                </div>
            </div>
            <div className={`main-content ${cartToggle ? "cart-open" : "cart-close"}`}>
                <Outlet/>
            </div>
        </div>
    )
}