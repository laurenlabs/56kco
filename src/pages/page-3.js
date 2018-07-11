import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div>
    <p>Hello world from my third Gatsby page</p>
    <br />
    <div>
      <Link to="/">Link Home</Link>
    </div>
    <div>
      <Link to="/page-2/">Link Page 2</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
);
