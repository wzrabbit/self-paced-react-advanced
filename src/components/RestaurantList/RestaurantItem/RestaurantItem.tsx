import { css } from 'styled-system/css';
import { stack, circle } from 'styled-system/patterns';
import { CATEGORY_ICONS } from '@/assets/images';
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

  title: css({
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

type RestaurantCategory = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';

interface RestaurantItemProps {
  category: RestaurantCategory;
  title: string;
  description?: string;
  onClick: (
    category: RestaurantCategory,
    title: string,
    description?: string,
  ) => void;
}

const RestaurantItem = (props: RestaurantItemProps) => {
  const { category, title, description, onClick } = props;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      onClick(category, title, description);
    }
  };

  return (
    <li
      className={styles.listItem}
      role="button"
      tabIndex={0}
      onClick={() => onClick(category, title, description)}
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
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default RestaurantItem;
