import { FC } from 'react';
import SvgIcon from '../svgIcon/svgIcon';
import { ReactComponent as HandShakeIcon } from 'assets/handShakeIcon/hand-shake.svg';
import { StyledCircle } from './handShake.styles';

const HandShake: FC = () => {
  return (
    <StyledCircle onClick={() => window.open('mailto:blazej@wp.pl')}>
      <SvgIcon Icon={HandShakeIcon} width={122} height={76} />
    </StyledCircle>
  );
};

export default HandShake;
