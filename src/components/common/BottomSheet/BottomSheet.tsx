import { css } from 'styled-system/css';
import { createPortal } from 'react-dom';
import type { PropsWithChildren } from 'react';

const styles = {
  container: css({
    position: 'relative',
    zIndex: 1000000,
  }),

  backdrop: css({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    bg: 'rgba(0, 0, 0, 0.35)',
    filter: 'blur(10px)',
  }),

  modal: css({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    bg: 'white',
    borderRadius: '8px 8px 0 0',
  }),
};

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
}

const BottomSheet = (props: PropsWithChildren<BottomSheetProps>) => {
  const { open, onClose, children } = props;

  return (
    open &&
    createPortal(
      <div className={styles.container}>
        <div className={styles.backdrop} onClick={onClose}></div>
        <div className={styles.modal}>{children}</div>
      </div>,
      document.body,
    )
  );
};

export default BottomSheet;
