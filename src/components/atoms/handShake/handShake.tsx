import { FC } from 'react';
import SvgIcon from '../svgIcon/svgIcon';
import { ReactComponent as HandShakeIcon } from 'assets/handShakeIcon/hand-shake.svg';
import { StyledCircle } from './handShake.styles';

const HandShake: FC = () => {
  const handleClick = () => {
    window.open('mailto:blazpie12@gmail.com');
  };
  return (
    <StyledCircle onClick={handleClick}>
      <SvgIcon Icon={HandShakeIcon} width={110} height={76} />
    </StyledCircle>
  );
};

export default HandShake;
