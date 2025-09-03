import { css } from 'styled-system/css';
import type { ChangeEventHandler } from 'react';
import type { Option } from '@/types';

const styles = {
  select: css({
    width: 'var(--width)',
    height: '44px',
    padding: '8px',
    border: '1px solid token(colors.gray.200)',
    borderRadius: '8px',
    fontSize: 'px',
  }),
};

interface SelectProps {
  name: string;
  options: Option[];
  value: string;
  width?: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Select = (props: SelectProps) => {
  const { name, options, value, width = '100%', required, onChange } = props;

  return (
    <select
      className={styles.select}
      style={{ '--width': width }}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
