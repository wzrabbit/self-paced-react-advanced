import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Select from './Select';

const meta = {
  component: Select,
  argTypes: {
    width: {
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    required: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'mySelect',
    options: [
      {
        value: '',
        label: '선택해 주세요',
      },
      {
        value: '항목 1',
        label: '항목 1',
      },
      {
        value: '항목 2',
        label: '항목 2',
      },
      {
        value: '항목 3',
        label: '항목 3',
      },
    ],
    value: '항목 1',
    onChange: fn(),
  },
};

/**
 * 원한다면 `width`를 지정하여 컴포넌트의 가로 길이를 조절할 수 있습니다.
 */
export const SpecifiedWidth: Story = {
  args: {
    name: 'mySelect',
    width: '120px',
    options: [
      {
        value: '',
        label: '선택해 주세요',
      },
      {
        value: '항목 1',
        label: '항목 1',
      },
      {
        value: '항목 2',
        label: '항목 2',
      },
      {
        value: '항목 3',
        label: '항목 3',
      },
    ],
    value: '항목 1',
    onChange: fn(),
  },
};
