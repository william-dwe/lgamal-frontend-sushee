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

export interface IMenuQuery {
	search: string;
	sort: string;
	sortBy: string;
	filterByCategory: string;
	limit: number;
	page: number;

}

export interface IPromotion {
    id: number;
    AdminId: number;
	Name: string;
	Description: string;
	PromotionPhoto: string;
	DiscountRate: number;
	StartAt: Date;
	ExpiredAt: Date;
	PromoMenus: [
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


export interface IPromotionLists {
    promotions: IPromotion[];
}