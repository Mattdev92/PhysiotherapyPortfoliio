import React from 'react';

export interface TextProps {
  content: string;
  fontWeight: string;
  fontSize: string;
  specialFont?: boolean;
  margin: string;
  background?: boolean;
  color?: string;
  refText?: React.RefObject<any>;
  click?: () => void;
  pointer?: boolean;
  center?: boolean;
}
