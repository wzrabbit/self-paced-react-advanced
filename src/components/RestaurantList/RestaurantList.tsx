import { stack } from 'styled-system/patterns';
import type { Restaurant } from '@/types';
import RestaurantItem from './RestaurantItem';

const styles = {
  restaurantListContainer: stack({
    padding: '0 16px',
    margin: '16px 0',
  }),
};

interface RestaurantListProps {
  restaurants: Restaurant[];
  onRestaurantClick: (restaurant: Restaurant) => void;
}

const RestaurantList = (props: RestaurantListProps) => {
  const { restaurants, onRestaurantClick } = props;

  return (
    <section className={styles.restaurantListContainer}>
      <ul>
        {restaurants.map((restaurant, index) => (
          <RestaurantItem
            key={index}
            restaurant={restaurant}
            onClick={onRestaurantClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
