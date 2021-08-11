import React, { FC } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata, Url } from 'helpers/helpers';
import { ListWrapper } from './navList.styles';
import { StyledLink } from './navList.styles';
import { NavListProps } from './navList.types';

const NavList: FC<NavListProps> = ({ refNav }) => {
  return (
    <ListWrapper ref={refNav}>
      {Navdata.map((item, i: number) => (
        <StyledLink to={Url[i]} key={i}>
          <Text
            content={item}
            key={item}
            fontSize={'S'}
            fontWeight={'S'}
            margin={17}
            pointer={true}
          />
        </StyledLink>
      ))}
    </ListWrapper>
  );
};

export default NavList;
