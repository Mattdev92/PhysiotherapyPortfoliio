import { FC } from 'react';
import { NavWrapper, StyledIcon } from './navigation.styles';
import { ReactComponent as LogoIcon } from 'assets/logoIcon/logo.svg';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import NavList from 'components/molecules/navList/navList';

const Nav: FC = () => {
  return (
    <NavWrapper>
      <StyledIcon to="/">
        <SvgIcon Icon={LogoIcon} height={80} width={110} />
      </StyledIcon>
      <NavList />
    </NavWrapper>
  );
};

export default Nav;
