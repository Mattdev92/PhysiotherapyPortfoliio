import { FC, useState, useEffect, useRef } from 'react';
import { SocialNetworkIcon, SocialNetworkUrl } from 'helpers/helpers';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { Wrapper, IconWrapper, StyledIcon } from './socialNetworkIcons.styles';

const SocialNetworkIcons: FC = () => {
  const [scrollBackground, setScrollBackround] = useState(false);
  const RefElement = useRef(null);

  useEffect(() => {
    document.addEventListener(
      'scroll',
      (e) => {
        setScrollBackround(true);
      },
      true
    );
  }, []);

  return (
    <Wrapper scrollBackground={scrollBackground} ref={RefElement}>
      <IconWrapper>
        {SocialNetworkIcon.map((item, i) => (
          <StyledIcon href={SocialNetworkUrl[i]} key={i}>
            <SvgIcon Icon={item} height={25} width={25} />
          </StyledIcon>
        ))}
      </IconWrapper>
    </Wrapper>
  );
};

export default SocialNetworkIcons;
