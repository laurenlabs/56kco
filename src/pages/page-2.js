import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div>
    <p>Hello world from my second Gatsby page</p>
    <br />
    <div>
      <Link to="/">Link Home</Link>
    </div>
    <div>
      <Link to="/page-3/">Link Page 3</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
);
