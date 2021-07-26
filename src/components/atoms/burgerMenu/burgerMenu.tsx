import { FC } from 'react';
import { BurgerWrapper, OuterLine, InnerLine } from './burgerMenu.styles';

const BurgerMenu: FC = () => {
  return (
    <BurgerWrapper>
      <OuterLine />
      <InnerLine />
      <OuterLine />
    </BurgerWrapper>
  );
};

export default BurgerMenu;
