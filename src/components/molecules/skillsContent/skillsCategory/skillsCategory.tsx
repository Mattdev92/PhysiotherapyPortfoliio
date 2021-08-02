import { FC, useEffect, useState } from 'react';
import {
  TextWrapper,
  Wrapper,
  TitleWrapper,
  SkillsWrapper,
} from './skillsCategory.styles';
import Text from 'components/atoms/text/text';
import PseudoCode from '../pseudoCode/pseudoCode';
import { SkillsProps } from './skillsCategory.types';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { techIcons } from 'helpers/helpers';
import { ReactComponent as ReactIcon } from 'assets/techIcons/React.svg';

const SkillsCategory: FC<SkillsProps> = ({ skill, category }) => {
  const [actualScreenWidth, setActualScreenWidth] = useState(window.innerWidth);
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setActualScreenWidth(getWidth());
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  return (
    <Wrapper>
      <PseudoCode />
      <TitleWrapper>
        <Text
          fontSize={actualScreenWidth < 700 ? 'XS' : 'S'}
          fontWeight={'M'}
          margin={5}
          content={category}
        />
      </TitleWrapper>
      <SkillsWrapper>
        {skill.map((item, i) => {
          return (
            <TextWrapper>
              <Text
                fontSize={'XS'}
                fontWeight={actualScreenWidth < 700 ? 'S' : 'M'}
                margin={5}
                content={item}
              />{' '}
              {category === `'FRONTEND ESSENTIALS'>` && (
                <SvgIcon Icon={techIcons[i]} width={43} height={43} />
              )}
              {item === `React` && (
                <SvgIcon Icon={ReactIcon} width={43} height={43} />
              )}
            </TextWrapper>
          );
        })}
      </SkillsWrapper>
    </Wrapper>
  );
};
export default SkillsCategory;
