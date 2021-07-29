import { FC } from 'react';
import { BurgerWrapper, OuterLine, InnerLine } from './burgerMenu.styles';
import { BurgerMenuProps } from './burgerMenu.types';

const BurgerMenu: FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <BurgerWrapper onClick={onClick}>
      <OuterLine />
      <InnerLine />
      <OuterLine />
    </BurgerWrapper>
  );
};

export default BurgerMenu;
