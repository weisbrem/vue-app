export interface ISneakersItem {
  id: number;
  favoriteId?: number | null;
  item_id?: number;
  imageUrl: string;
  title: string;
  price: number;
  isFavorite?: boolean;
  isAdded?: boolean;
}

export interface IFavoriteItem {
  id: number;
  item: Pick<ISneakersItem, 'title' | 'price' | 'imageUrl' | 'id'>;
}
