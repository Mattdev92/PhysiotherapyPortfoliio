import { FC } from 'react';
import { SvgContainer } from './svgIcon.styles';
import { SvgIconProps } from './svgIcon.types';

const SvgIcon: FC<SvgIconProps> = (props) => {
  const { Icon } = props;
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  );
};

export default SvgIcon;
