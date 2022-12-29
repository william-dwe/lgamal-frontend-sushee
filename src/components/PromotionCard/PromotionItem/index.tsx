import React from 'react'
import "./index.scss"
import {FaStar, FaShoppingCart } from "react-icons/fa";

type Props = {
    id: number;
    PromotionId: number;
    MenuId: number;
    Menu: {
        id: number;
        MenuName: string;
        AvgRating: number;
        NumberOfFavorites: number;
        Price: number;
        MenuPhoto: string;
        CategoryId: number;
    }
    PromotionPrice: number;
}

export default function PromotionItem(props: Props): JSX.Element {
    return (
        <div className="promo-item">
            <h2>{props.Menu.MenuName}</h2>
            <div className="price">
                <p className="prev-price">IDR {(props.Menu.Price).toLocaleString('id-ID')}</p>
                <p className="current-price">IDR {(props.PromotionPrice).toLocaleString('id-ID')}</p>
            </div>
            <div className="rating">
                <p className="card-text">{props.Menu.AvgRating.toFixed(2)}</p>
                <FaStar/>
            </div>
            <button className='btn btn-success'><FaShoppingCart/>Cart</button>
        </div>
    )
}