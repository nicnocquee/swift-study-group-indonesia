import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import Sticky from 'sticky-js';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Help from './pages/Support';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PageNotFound from './pages/PageNotFound';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tutorials">
          <Tutorials />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blog-post">
          <BlogPost />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/documentation">
          <Documentation />
        </Route>
        <Route path="/support">
          <Help />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
