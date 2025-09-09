import { RESTAURANT_CATEGORIES } from '@/constants';

export interface Restaurant {
  category: RestaurantCategory;
  name: string;
  description?: string;
}

export type RestaurantCategory = (typeof RESTAURANT_CATEGORIES)[number];

export type RestaurantFilterCategory = RestaurantCategory | '전체';

export type Option = { value: string; label: string };
