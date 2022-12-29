import React from 'react'
import "./index.scss"
import { FaShoppingCart } from "react-icons/fa";
import PromotionItem from './PromotionItem';

type Props = {
    menuName: string
    description: string
    promotionPhoto: string
    discountRate: number
    startAt: Date
    expiredAt: Date
    promotionMenus: [
		{
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
	]
}

export default function PromotionCard(props: Props): JSX.Element {
    return (
        <div className="card">
            <img src={props.promotionPhoto} className="card-img" alt={props.menuName}/>
            <div className="card-body">
                <h5 className="card-title">{props.menuName}</h5>
                <p className="card-description">{props.description}</p>
            </div>
            <div className="card-footer">
                <div className="priceAndCart">
                        { props.promotionMenus 
                            ? props.promotionMenus.map((val, i) => {
                                return <PromotionItem 
                                    id={val.id}
                                    PromotionId={val.PromotionId}
                                    MenuId={val.MenuId}
                                    Menu= {val.Menu}
                                    PromotionPrice= {val.PromotionPrice}
                                    key={i}
                                />
                            })
                            : <></>
                        }
                </div>
            </div>
        </div>
    )
}