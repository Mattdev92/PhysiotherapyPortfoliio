import React from 'react';
interface ContextProps {
  store: { mobileNav: boolean };
  setStore: React.Dispatch<React.SetStateAction<any>>;
}
const AppContext = React.createContext<ContextProps>({
  store: { mobileNav: false },
  setStore: () => {},
});

export default AppContext;
