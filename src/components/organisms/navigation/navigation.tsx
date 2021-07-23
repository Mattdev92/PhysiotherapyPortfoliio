import { FC } from 'react';
import { NavWrapper } from './navigation.styles';
import { ReactComponent as LogoIcon } from 'assets/logoIcon/logo.svg';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import NavList from 'components/molecules/navList/navList';

const Nav: FC = () => {
  return (
    <NavWrapper>
      <SvgIcon
        Icon={LogoIcon}
        height={80}
        width={110}
        position={'absolute'}
        top={35}
      />
      <NavList />
    </NavWrapper>
  );
};

export default Nav;
