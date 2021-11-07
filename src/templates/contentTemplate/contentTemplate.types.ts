import React from 'react';

export interface ContentProps {
  refContent?: React.RefObject<any>;
  children?: any;
  mail?: boolean;
}
export interface ContentWrapperProps {
  mail?: boolean;
}
