import type { RestaurantFilterCategory } from '@/types';
import { RESTAURANT_CATEGORIES } from '@/constants';

export const isRestaurantFilterCategory = (
  category: string,
): category is RestaurantFilterCategory => {
  return (
    category === '전체' ||
    RESTAURANT_CATEGORIES.some(
      (restaurantCategory) => restaurantCategory === category,
    )
  );
};
