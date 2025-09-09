import useRestaurants from '@/hooks/useRestaurants';
import RestaurantList from '@/components/RestaurantList';
import Header from '@/components/Header';
import Select from '@/components/common/Select';
import { RESTAURANT_CATEGORIES } from './constants';
import { ChangeEvent, MouseEvent } from 'react';

const restaurantCategoryOptions = [
  { label: '전체', value: '전체' },
  ...RESTAURANT_CATEGORIES.map((category) => ({
    label: category,
    value: category,
  })),
];

const App = () => {
  const { restaurants, category, loading, updateCategory, addRestaurant } =
    useRestaurants();

  return (
    <>
      <Header onRestaurantAddButtonClick={() => {}} />
      <Select
        name="filter"
        options={restaurantCategoryOptions}
        value={category}
        width="120px"
        onChange={updateCategory}
      />
      <RestaurantList restaurants={restaurants} onRestaurantClick={() => {}} />
    </>
  );
};

export default App;
