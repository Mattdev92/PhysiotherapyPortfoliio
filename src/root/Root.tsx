import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/globalStyles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/globalStyles/theme';
import MainView from 'views/mainView/mainView';
import AboutView from 'views/aboutView/aboutView';
import ContactView from 'views/contactView/contactView';
import AppContext from 'context';

const Root: FC = () => {
  const [store, setStore] = useState({
    mobileNav: false,
    actualScreenWidth: window.innerWidth,
  });

  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  useEffect(() => {
    const resizeListener = () => {
      setStore((prev) => {
        return { mobileNav: prev.mobileNav, actualScreenWidth: getWidth() };
      });
    };
    window.addEventListener('resize', resizeListener);
  }, []);
  return (
    <AppContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainView />
            </Route>
            <Route path="/about">
              <AboutView />
            </Route>
            <Route path="/contact">
              <ContactView />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default Root;
