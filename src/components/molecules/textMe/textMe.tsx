import { FC, useEffect, useRef } from 'react';
import { Wrapper } from './textMe.styles';
import Text from 'components/atoms/text/text';
import gsap from 'gsap';

const HelloTextContainer: FC = () => {
  const refText = useRef(null);
  useEffect(() => {
    const specialtextTimeline = gsap
      .timeline({
        delay: 0,
      })
      .from(refText.current, {
        opacity: 0,
        y: -10,
        duration: 1,
        delay: 1.9,
      });
    specialtextTimeline.play();
  }, []);

  return (
    <Wrapper ref={refText}>
      <Text
        content={'Napisz do mnie !'}
        fontSize={'M'}
        fontWeight={'M'}
        margin={'0'}
        background
        pointer={true}
        center
        click={() => window.open('mailto:mateusz.grzejszczyk1@gmail.com')}
      />
    </Wrapper>
  );
};

export default HelloTextContainer;
