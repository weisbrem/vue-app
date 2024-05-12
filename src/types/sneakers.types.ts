export interface ISneakersItem {
  id: number
  favoriteId?: number | null
  productId?: number
  imageUrl: string
  title: string
  price: number
  isFavorite?: boolean
  isAdded?: boolean
}
