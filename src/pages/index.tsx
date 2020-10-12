import React from 'react';
import { Router } from '@reach/router';

//===
import Home from 'pages/Home/Home';
//===

export default () => (
  <Router>
    <Home path='/' />
  </Router>
);
