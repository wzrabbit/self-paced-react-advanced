export interface Restaurant {
  category: RestaurantCategory;
  name: string;
  description?: string;
}

type RestaurantCategory = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';

export type Option = { value: string; label: string };
