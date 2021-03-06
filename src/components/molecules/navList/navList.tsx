import { FC, useRef, useContext } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata, Url } from 'helpers/helpers';
import { ListWrapper, NavWrapper, StyledLink } from './navList.styles';
import { NavListProps } from './navList.types';
import { StyledLogo } from './navList.styles';
import SocialNetworkIcons from 'components/molecules/socialNetworkIcons/socialNetworkIcons';
import Logo from 'components/atoms/logo/logo';
import AppContext from 'context';
const NavList: FC<NavListProps> = ({ refNav }) => {
  const {
    store: { mobileNav },
    setStore,
  } = useContext(AppContext);
  console.log(mobileNav);
  const refLogo = useRef(null);
  return (
    <NavWrapper
      mobile={mobileNav}
      onClick={() => setStore({ mobileNav: false })}
    >
      <StyledLogo ref={refLogo} to="/">
        <Logo />
      </StyledLogo>
      <ListWrapper ref={refNav}>
        {Navdata.map((item, i: number) => (
          <StyledLink to={Url[i]} key={i}>
            <Text
              content={item}
              key={item}
              fontSize={window.innerWidth <= 580 ? 'S' : 'XS'}
              fontWeight={'M'}
              margin={'17px'}
              pointer={true}
              color={window.innerWidth <= 580 ? 'white' : 'black'}
              hover
            />
          </StyledLink>
        ))}
      </ListWrapper>
      <SocialNetworkIcons />
    </NavWrapper>
  );
};

export default NavList;
