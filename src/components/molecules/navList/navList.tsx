import React, { FC, useRef } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata, Url } from 'helpers/helpers';
import { ListWrapper, NavWrapper, StyledLink } from './navList.styles';
import { NavListProps } from './navList.types';
import { StyledIcon } from './navList.styles';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { ReactComponent as LogoIcon } from 'assets/logoIcon/logo.svg';
import SocialNetworkIcons from 'components/molecules/socialNetworkIcons/socialNetworkIcons';

const NavList: FC<NavListProps> = ({ refNav }) => {
  const refLogo = useRef(null);
  return (
    <NavWrapper>
      <StyledIcon ref={refLogo} to="/">
        <SvgIcon Icon={LogoIcon} height={80} width={110} />
      </StyledIcon>

      <ListWrapper ref={refNav}>
        {Navdata.map((item, i: number) => (
          <StyledLink to={Url[i]} key={i}>
            <Text
              content={item}
              key={item}
              fontSize={'XS'}
              fontWeight={'M'}
              margin={17}
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
