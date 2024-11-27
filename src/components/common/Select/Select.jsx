import * as S from './Select.styled';

const Select = ({ options }) => {
  return (
    <S.Select>
      <S.Option value="1">Option 1</S.Option>
      <S.Option value="2">Option 2</S.Option>
      <S.Option value="3">Option 3</S.Option>
    </S.Select>
  );
};

const foo = 'asdf';
