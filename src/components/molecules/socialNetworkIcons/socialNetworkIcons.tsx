import { FC } from 'react';
import { SocialNetworkIcon, SocialNetworkUrl } from 'helpers/helpers';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { Wrapper, IconWrapper, StyledIcon } from './socialNetworkIcons.styles';

const SocialNetworkIcons: FC = () => {
  return (
    <Wrapper>
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
