import { css } from 'styled-system/css';
import { hstack } from 'styled-system/patterns';
import { ADD_BUTTON_ICON } from '@/assets/images';
import type { MouseEventHandler } from 'react';

const styles = {
  header: hstack({
    justify: 'space-between',
    height: '64px',
    padding: '0 16px',
    bg: 'primary',
  }),

  headerTitle: css({
    color: 'white',
    fontSize: '20px',
    fontWeight: 700,
  }),

  restaurantAddButton: css({
    height: '40px',
    border: 'none',
    borderRadius: '8px',
    bg: 'transparent',
    fontSize: '24px',
    cursor: 'pointer',
  }),
};

interface HeaderProps {
  onRestaurantAddButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const Header = (props: HeaderProps) => {
  const { onRestaurantAddButtonClick } = props;

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>점심 뭐 먹지</h1>
      <button
        className={styles.restaurantAddButton}
        onClick={onRestaurantAddButtonClick}
        aria-label="음식점 추가"
      >
        <img src={ADD_BUTTON_ICON} alt="" />
      </button>
    </header>
  );
};

export default Header;
