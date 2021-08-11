import React, { FC } from 'react';
import { StyledButton } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ content }) => (
  <StyledButton>{content}</StyledButton>
);

export default Button;
