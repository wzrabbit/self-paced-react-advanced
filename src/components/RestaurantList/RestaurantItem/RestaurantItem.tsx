import { css } from 'styled-system/css';
import { stack, circle } from 'styled-system/patterns';
import { CATEGORY_ICONS } from '@/assets/images';
import type { Restaurant } from '@/types';
import type { KeyboardEvent } from 'react';

const styles = {
  listItem: stack({
    direction: 'row',
    align: 'flex-start',
    padding: '16px 8px',
    borderBottom: '1px solid #e9eaed',
    transition: '0.3s',
    cursor: 'pointer',
    '&:hover': {
      bg: 'gray.100',
    },
  }),

  imageContainer: circle({
    width: '64px',
    height: '64px',
    minWidth: '64px',
    marginRight: '16px',
    borderRadius: '50%',
    backgroundColor: 'lighten',
  }),

  icon: css({
    width: '36px',
    height: '36px',
  }),

  textContainer: stack({
    gap: 0,
  }),

  name: css({
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 700,
  }),

  description: css({
    display: '-webkit-box',
    paddingTop: '8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    lineClamp: 2,
    fontSize: '16px',
    lineHeight: '24px',
  }),
};

interface RestaurantItemProps {
  restaurant: Restaurant;
  onClick: (restaurant: Restaurant) => void;
}

const RestaurantItem = (props: RestaurantItemProps) => {
  const { restaurant, onClick } = props;
  const { category, name, description } = restaurant;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      onClick(restaurant);
    }
  };

  return (
    <li
      className={styles.listItem}
      role="button"
      tabIndex={0}
      onClick={() => onClick(restaurant)}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.imageContainer}>
        <img
          src={CATEGORY_ICONS[category]}
          alt={category}
          className={styles.icon}
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default RestaurantItem;
