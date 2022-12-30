import React from 'react'
import "./index.scss"
import Menu from '../../../pages/Menu';
import CheckBox from './Checkbox';
import DeleteButton from './DeleteButton';
import { useDeleteCartsMutation } from '../../../features/cartSlice/cartApiSlice';

type Props = {
    ID: number,
    Menu: {
        ID: number,
        MenuName: string,
        AvgRating: number,
        NumberOfFavorites: number,
        Price: number,
        MenuPhoto: string ,
        CategoryId: number
    },
    PromotionId?: number,
    Quantity: number,
    MenuOption?: any,
}

export default function CartCard(props: Props): JSX.Element {
    const [deleteCarts, { isLoading }] = useDeleteCartsMutation()

    const handleDelete = () => {
        deleteCarts(props.ID)
    } 

    return (
        <div className="card cart_card">
            <div className="row">
                <div className="d-flex align-items-center col-md-1">
                    <CheckBox/>
                </div>
                <div className="d-flex align-items-center col-md-3"> 
                    <img src={props.Menu.MenuPhoto} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="d-flex align-items-center col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{props.Menu.MenuName}</h5>
                        <div className="container d-flex row">
                            <p className="quantity">{props.Quantity} pcs</p>
                            <p className="card-text">IDR {(props.Menu.Price*props.Quantity).toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex align-items-center col-md-1">
                    <DeleteButton handleDelete={handleDelete}/>
                </div>
            </div>
        </div>
    )
}