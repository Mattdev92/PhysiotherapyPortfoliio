import { FC, useRef } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata, Url } from 'helpers/helpers';
import { ListWrapper, NavWrapper, StyledLink } from './navList.styles';
import { NavListProps } from './navList.types';
import { StyledLogo } from './navList.styles';
import SocialNetworkIcons from 'components/molecules/socialNetworkIcons/socialNetworkIcons';
import Logo from 'components/atoms/logo/logo';
const NavList: FC<NavListProps> = ({ refNav }) => {
  const refLogo = useRef(null);
  return (
    <NavWrapper>
      <StyledLogo ref={refLogo} to="/">
        <Logo />
      </StyledLogo>
      <ListWrapper ref={refNav}>
        {Navdata.map((item, i: number) => (
          <StyledLink to={Url[i]} key={i}>
            <Text
              content={item}
              key={item}
              fontSize={'XS'}
              fontWeight={'M'}
              margin={'17px'}
              pointer={true}
            />
          </StyledLink>
        ))}
      </ListWrapper>
      <SocialNetworkIcons />
    </NavWrapper>
  );
};

export default NavList;
