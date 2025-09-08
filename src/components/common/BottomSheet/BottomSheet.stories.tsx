import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import BottomSheet from './BottomSheet';

const meta = {
  component: BottomSheet,
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          style={{
            border: '1px solid black',
            padding: '5px',
            cursor: 'pointer',
          }}
        >
          모달 열기
        </button>
        <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
          <p style={{ padding: '10px' }}>Hello, BottomSheet!</p>
        </BottomSheet>
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
  },
};
