import { Restaurant, RestaurantFilterCategory } from '@/types';
import { isRestaurantFilterCategory } from '@/types/typeGuards';
import { useState, useEffect, useCallback } from 'react';
import type { ChangeEventHandler } from 'react';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [category, setCategory] = useState<RestaurantFilterCategory>('전체');
  const [loading, setLoading] = useState(true);

  const filteredRestaurants =
    category === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  const fetchRestaurants = useCallback(async (): Promise<Restaurant[]> => {
    try {
      const response = await fetch('http://localhost:3000/restaurants');
      const newRestaurants = await response.json();
      return newRestaurants;
    } catch {
      throw new Error('음식점 목록을 불러오는 데 실패하였습니다.');
    }
  }, []);

  const postRestaurant = useCallback(async (restaurant: Restaurant) => {
    try {
      await fetch('/restaurants', {
        method: 'POST',
        body: JSON.stringify(restaurant),
      });
    } catch {
      throw new Error(
        '음식점을 추가하는 데 실패하였습니다. 다시 시도해 주세요.',
      );
    }
  }, []);

  const addRestaurant = async (restaurant: Restaurant) => {
    await postRestaurant(restaurant);
    const newRestaurants = await fetchRestaurants();
    setRestaurants(newRestaurants);
  };

  const updateCategory: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newCategory = event.target.value;
    console.log('ok');

    if (isRestaurantFilterCategory(newCategory)) {
      setCategory(newCategory);
    }
  };

  useEffect(() => {
    (async () => {
      const newRestaurants = await fetchRestaurants();
      setRestaurants(newRestaurants);
      setLoading(false);
    })();
  }, [fetchRestaurants]);

  return {
    restaurants: filteredRestaurants,
    category,
    loading,
    updateCategory,
    addRestaurant,
  };
};

export default useRestaurants;
