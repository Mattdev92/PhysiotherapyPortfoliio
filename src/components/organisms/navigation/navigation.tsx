import { FC, useEffect, useRef } from 'react';
import { NavWrapper } from './navigation.styles';
import NavList from 'components/molecules/navList/navList';
import { useContext } from 'react';
import AppContext from 'context';
import gsap from 'gsap';
import { Back } from 'gsap/all';
import NavBanner from 'components/molecules/navBanner/navBanner';
import BurgerMenu from 'components/atoms/burgerMenu/burgerMenu';

const Nav: FC = () => {
  const refLogo = useRef(null);
  const refNav = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    t1.from(refLogo.current, {
      opacity: 0,
      rotation: -180,
      ease: Back.easeOut,
      duration: 1,
    });
    t1.from(refNav.current, {
      scaleX: 0.7,
      rotateX: 90,
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
    <NavWrapper mobile={mobileNav}>
      <BurgerMenu onClick={() => setStore({ mobileNav: true })} />
      <NavList refNav={refNav} />
      <NavBanner />
    </NavWrapper>
  );
};

export default Nav;
