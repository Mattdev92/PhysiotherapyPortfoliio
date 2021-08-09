import React from 'react';

export interface TextProps {
  content: string;
  fontWeight: string;
  fontSize: string;
  specialFont?: boolean;
  margin: number;
  background?: boolean;
  color?: string;
  marginLeft?: number;
  refText?: React.RefObject<any>;
  click?: () => void;
  pointer?: boolean;
  center?: boolean;
}
