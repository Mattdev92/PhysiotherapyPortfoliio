import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata } from 'helpers/helpers';
import { ListWrapper } from './navList.styles';

const NavList: FC = () => {
  return (
    <ListWrapper>
      {Navdata.map((item) => (
        <Text content={item} key={item} />
      ))}
    </ListWrapper>
  );
};

export default NavList;
