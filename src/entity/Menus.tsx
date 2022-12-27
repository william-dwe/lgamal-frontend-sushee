export interface IMenu {
    id: string;
    MenuName: string;
	AvgRating: number;
	NumberOfFavorites: number;
	Price: number;
	MenuPhoto: string;
	CategoryId: number
}

export interface IMenuLists {
    menus: IMenu[];
    current_page: number;
    max_page: number;
}

export interface IPromotion {
    id: string;
    AdminId: number;
	Name: string;
	Description: string;
	PromotionPhoto: string;
	DiscountRate: number;
	StartAt: Date;
	expiredAt: Date;
}


export interface IPromotionLists {
    promotions: IPromotion[];
}