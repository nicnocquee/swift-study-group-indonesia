import React from 'react';

import Header from '../partials/Header';
import BlogList from '../partials/BlogList';
import Footer from '../partials/Footer';

function Blog() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <BlogList />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Blog;