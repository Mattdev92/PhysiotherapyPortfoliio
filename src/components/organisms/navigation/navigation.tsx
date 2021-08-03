import { FC, useEffect, useRef } from 'react';
import { NavWrapper, StyledIcon } from './navigation.styles';
import { ReactComponent as LogoIcon } from 'assets/logoIcon/logo.svg';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import NavList from 'components/molecules/navList/navList';
import { useContext } from 'react';
import AppContext from 'context';
import gsap from 'gsap';
import { Back } from 'gsap/all';

const Nav: FC = () => {
  const refLogo = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    t1.from(refLogo.current, {
      opacity: 0,
      rotation: -180,
      ease: Back.easeOut,
      duration: 1,
    });
    t1.play();
  }, [refLogo]);
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
      <StyledIcon ref={refLogo} to="/">
        <SvgIcon Icon={LogoIcon} height={80} width={110} />
      </StyledIcon>
      <NavList />
    </NavWrapper>
  );
};

export default Nav;
