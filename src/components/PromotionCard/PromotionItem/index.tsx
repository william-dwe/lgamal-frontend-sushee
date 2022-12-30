import React from 'react'
import "./index.scss"
import {FaStar, FaShoppingCart } from "react-icons/fa";
import { usePostCartsMutation } from '../../../features/cartSlice/cartApiSlice';
import { ICartPostReq } from "../../../entity/Carts";

type Props = {
    id: number;
    promotion_id: number;
    menu_id: number;
    menu: {
        id: number;
        menu_name: string;
        avg_rating: number;
        number_of_favorites: number;
        price: number;
        menu_photo: string;
        category_id: number;
    }
    promotion_price: number;
}

export default function PromotionItem(props: Props): JSX.Element {

    const [postCarts] = usePostCartsMutation()

    const handleAddCart = (e:any) => {
        const newItemCart =  {
            menu_id: props.menu_id,
            promotion_id: props.promotion_id ? props.promotion_id: null,
            quantity: 1,
            menu_option: "",
        } as ICartPostReq

        postCarts(newItemCart)
    }
    return (
        <div className="promo-item">
            <h2>{props.menu.menu_name}</h2>
            <div className="price">
                <p className="prev-price">IDR {(props.menu.price).toLocaleString('id-ID')}</p>
                <p className="current-price">IDR {(props.promotion_price).toLocaleString('id-ID')}</p>
            </div>
            <div className="rating">
                <p className="card-text">{props.menu.avg_rating.toFixed(2)}</p>
                <FaStar/>
            </div>
            <button className='btn btn-success' onClick={handleAddCart}><FaShoppingCart/>Cart</button>
        </div>
    )
}