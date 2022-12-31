import React, { useState } from 'react'
import "./index.scss"
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { usePostCartsMutation } from '../../features/cartSlice/cartApiSlice';
import { ICartPostReq } from "../../entity/Carts";
import { IMenuCustomization } from '../../entity/Menus';
import CustomizationModal from '../CustomizationModal';

type Props = {
    menu_id: number;
    promotion_id?:number;
    menu_name: string
    avg_rating: number
    number_of_favorites: number
    price: number
    menu_photo: string
    category_id: number
    customization?: IMenuCustomization[]
}

export default function MenuCard(props: Props): JSX.Element {
    const [customResult, setCustomResult] = useState({})
    const [toggleCustom, setToggleCustom] = useState(false)
    const [postCarts] = usePostCartsMutation()

    const handleAddCart = (e:any) => {
        if (props.customization?.length !== 0) {
            setToggleCustom(true)
            return
        }

        const newItemCart =  {
            menu_id: props.menu_id,
            promotion_id: props.promotion_id ? props.promotion_id: null,
            quantity: 1,
            menu_option: {},
        } as ICartPostReq

        postCarts(newItemCart)
    }

    const handleAddCartWithCustom = (e:any) => {
        
        const newItemCart =  {
            menu_id: props.menu_id,
            promotion_id: props.promotion_id ? props.promotion_id: null,
            quantity: 1,
            menu_option: customResult,
        } as ICartPostReq

        postCarts(newItemCart)
        setCustomResult({})
        setToggleCustom(false)
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
                    {
                        toggleCustom && props.customization?.length !== 0
                        ? <></>
                        : <button className='btn btn-success' onClick={handleAddCart}><FaShoppingCart/>Cart</button>
                    }
                </div>
                {
                    toggleCustom && props.customization && props.customization?.length !== 0
                    ? <CustomizationModal 
                        customization={props.customization}
                        customResult={customResult}
                        setCustomResult={setCustomResult}
                        handleSubmit={handleAddCartWithCustom}
                    />
                    :<></>
                }
            </div>
        </div>
    )
}