import React from 'react';

import Header from '../partials/Header';
import AboutIntro from '../partials/AboutIntro';
import AboutStory from '../partials/AboutStory';
import Stats from '../partials/Stats';
import Team from '../partials/Team';
import Career from '../partials/Career';
import Process from '../partials/Process';
import CtaAlternative from '../partials/CtaAlternative';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <AboutIntro />
        <AboutStory />
        <Stats />
        <Team />
        <Career />
        <Process />
        <CtaAlternative />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;