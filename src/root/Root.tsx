import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/globalStyles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/globalStyles/theme';
import MainView from 'views/mainView/mainView';
import AboutView from 'views/aboutView/mainView';
import SkillsView from 'views/skillsView/skillsView';
import ContactView from 'views/contactView/contactView';
import CvView from 'views/cvView/cvView';

const Root: FC = () => (
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
        <Route path="/skills">
          <SkillsView />
        </Route>
        <Route path="/contact">
          <ContactView />
        </Route>
        <Route path="/CV">
          <CvView />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;
