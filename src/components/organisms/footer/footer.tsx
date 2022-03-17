import { FC } from 'react';
import { Wrapper, FooterLink } from './footer.styles';

const Footer: FC = () => (
  <Wrapper>
    <FooterLink href="https://mateusz-grzejszczyk-frontend-developer.netlify.app/">
      © 2021 Mateusz Grzejszczyk. All Rights Reserved
    </FooterLink>
  </Wrapper>
);

export default Footer;
