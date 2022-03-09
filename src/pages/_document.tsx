/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
