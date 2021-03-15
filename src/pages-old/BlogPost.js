import React from 'react';

import Header from '../partials/Header';
import PostSingle from '../partials/PostSingle';
import Footer from '../partials/Footer';

function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <PostSingle />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default BlogPost;