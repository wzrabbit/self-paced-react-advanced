export interface Restaurant {
  category: RestaurantCategory;
  title: string;
  description?: string;
}

type RestaurantCategory = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';
