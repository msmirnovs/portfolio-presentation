import React from 'react';

import HorizontalNav2 from '../components/horizontal-navs/HorizontalNav2';
import HttpCode1 from '../components/http-codes/HttpCode1';
import Footer2 from '../components/footers/Footer2';

const meta = {};

export default function _404() {
  return (
    <React.Fragment>
      <HorizontalNav2 content={null} />

      <HttpCode1 content={null} />

      <Footer2 content={null} />
    </React.Fragment>
  );
}

