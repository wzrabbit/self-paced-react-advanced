import { css } from 'styled-system/css';
import { createPortal } from 'react-dom';
import type { PropsWithChildren } from 'react';

const styles = {
  container: css(),
  backdrop: css({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    bg: 'rgba(0, 0, 0, 0.35)',
  }),
  modal: css({
    bg: 'whtie',
  }),
};

interface BottomSheetProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

const BottomSheet = (props: PropsWithChildren<BottomSheetProps>) => {
  const { open, onClose, children } = props;

  return createPortal(
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.body,
  );
};

export default BottomSheet;
