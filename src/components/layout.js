import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../imports/globalStyles';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:title" content="Gatsby Boilerplate" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <title>Gatsby Boilerplate</title>
      </Helmet>
      <GlobalStyles />
      {children}
    </>
  );
}
