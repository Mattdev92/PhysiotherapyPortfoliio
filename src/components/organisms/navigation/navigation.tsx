import { FC } from 'react';
import { NavWrapper, StyledIcon } from './navigation.styles';
import { ReactComponent as LogoIcon } from 'assets/logoIcon/logo.svg';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import NavList from 'components/molecules/navList/navList';
import { useContext } from 'react';
import AppContext from 'context';

const Nav: FC = () => {
  const {
    store: { mobileNav },
    setStore,
  } = useContext(AppContext);

  return (
    <NavWrapper
      mobile={mobileNav}
      onClick={() => {
        setStore({
          mobileNav: false,
        });
      }}
    >
      <StyledIcon to="/">
        <SvgIcon Icon={LogoIcon} height={80} width={110} />
      </StyledIcon>
      <NavList />
    </NavWrapper>
  );
};

export default Nav;
