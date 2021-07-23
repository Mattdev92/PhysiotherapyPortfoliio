import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata, Url } from 'helpers/helpers';
import { ListWrapper } from './navList.styles';
import { StyledLink } from './navList.styles';

const NavList: FC = () => {
  return (
    <ListWrapper>
      {Navdata.map((item, i) => (
        <StyledLink to={Url[i]} key={i}>
          <Text content={item} key={item} />
        </StyledLink>
      ))}
    </ListWrapper>
  );
};

export default NavList;
