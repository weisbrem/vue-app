import type { Ref } from 'vue';
import type { ISneakersItem } from './sneakers.types';

export interface ICartProvide {
  onCloseDrawer: () => void;
  onOpenDrawer: () => void;
  itemsInCart: Ref<ISneakersItem[]>;
  handleAddToCart: (item: ISneakersItem) => void;
  handleRemoveFromCart: (item: ISneakersItem) => void;
}
