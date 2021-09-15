import React, { FC } from 'react';
import { NavBannerWrapper, Foot } from './navBanner.styles';
import Text from 'components/atoms/text/text';
import FootImage from 'assets/navIcon/foot.jpg';
import { bannerText } from 'helpers/helpers';
import { useLocation } from 'react-router-dom';
// bannerText.filter((text)=>location.includes(text))&&
const handleBannerText = (location: string) => {
  switch (location) {
    case '/':
      return bannerText[0];
    case '/about':
      return bannerText[1];
    case '/massage':
      return bannerText[2];
    case '/FAQ':
      return bannerText[3];
    case '/contact':
      return bannerText[4];
    default:
      return bannerText[0];
  }
};

const NavBanner: FC = () => {
  const { pathname } = useLocation();
  console.log(
    pathname,
    bannerText.filter((text) => pathname.includes(text))[0]
  );
  return (
    <NavBannerWrapper>
      <Text
        content={handleBannerText(pathname)}
        fontWeight={'M'}
        fontSize={'S'}
        margin={'0'}
      />
      <Foot src={FootImage} />
    </NavBannerWrapper>
  );
};

export default NavBanner;
