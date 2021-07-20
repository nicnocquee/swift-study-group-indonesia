import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./css/style.scss";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import PageNotFound from "./pages-old/PageNotFound";
// import Tutorials from './pages/Tutorials';
// import Pricing from './pages/Pricing';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
// import About from './pages/About';
// import Documentation from './pages/Documentation';
// import Help from './pages/Support';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ResetPassword from './pages/ResetPassword';
//

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky("[data-sticky]");
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Helmet>
        <title>Swift Study Group Indonesia</title>
        <meta
          name="description"
          content="Belajar bareng bahasa pemrograman Swift dan pengembangan aplikasi iOS/Mac tiap minggu online"
        />
        <meta property="og:title" content="Swift Study Group Indonesia" />
        <meta
          property="og:description"
          content="Belajar bareng bahasa pemrograman Swift dan pengembangan aplikasi iOS/Mac tiap minggu online"
        />
        <meta
          property="og:image"
          content="https://swiftid.dev/ogimage-min.png"
        />
        <meta property="og:url" content="https://swiftid.dev" />

        <meta name="twitter:title" content="Swift Study Group Indonesia" />
        <meta
          name="twitter:description"
          content="Belajar bareng bahasa pemrograman Swift dan pengembangan aplikasi iOS/Mac tiap minggu online"
        />
        <meta
          name="twitter:image"
          content="https://swiftid.dev/ogimage-min.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cerdas-cermat">
          <Quiz />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
        {/* <Route path="/tutorials">
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
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
