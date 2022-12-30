import React from 'react'
import "./index.scss"
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { usePostCartsMutation } from '../../features/cartSlice/cartApiSlice';
import { ICartPostReq } from "../../entity/Carts";

type Props = {
    menu_id: number;
    promotion_id?:number;
    menu_name: string
    avg_rating: number
    number_of_favorites: number
    price: number
    menu_photo: string
    category_id: number
}

export default function MenuCard(props: Props): JSX.Element {

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
        <div className="card mb-3">
            <img src={props.menu_photo} className="card-img" alt={props.menu_name}/>
            <div className="card-body"></div>
            <div className="card-footer">
                <h5 className="card-title">{props.menu_name}</h5>
                <p className="card-text">IDR {(props.price).toLocaleString('id-ID')}</p>
                <div className="ratingFavoriteCart">
                    <div className="ratingFavorite">
                        <div className="rating">
                        <p className="card-text">{props.avg_rating.toFixed(2)}</p>
                            <FaStar/>
                        </div>
                        <div className="favorite">
                        <p className="card-text">{props.number_of_favorites > 1000 ? "1K+" : props.number_of_favorites}</p>
                            <FaHeart/>
                        </div>
                    </div>
                    <button className='btn btn-success' onClick={handleAddCart}><FaShoppingCart/>Cart</button>
                </div>
            </div>
        </div>
    )
}