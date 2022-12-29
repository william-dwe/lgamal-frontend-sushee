export interface ICart {
    id: string;
    UserId: number,
    MenuId: number,
    Menu: {
        ID: number,
        MenuName: string,
        AvgRating: number,
        NumberOfFavorites: number,
        Price: number,
        MenuPhoto: string ,
        CategoryId: number
    }
    PromotionId: number,
    Quantity: number,
    MenuOption: any,
    IsOrdered: boolean
}

export interface ICartLists {
    carts: ICart[];
}