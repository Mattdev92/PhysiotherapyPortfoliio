import React, { FC } from 'react';
import { NavBannerWrapper, Foot } from './navBanner.styles';
import Text from 'components/atoms/text/text';
import FootImage from 'assets/navIcon/foot.jpg';
const NavBanner: FC = () => {
  return (
    <NavBannerWrapper>
      <Text
        content={'Cześć tu Błażej !'}
        fontWeight={'M'}
        fontSize={'S'}
        margin={'0'}
      />
      <Foot src={FootImage} />
    </NavBannerWrapper>
  );
};

export default NavBanner;
