import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'SimpleShotz is a digital media service provider',
  author = 'SimpleShotz',
  meta,
  title = 'SimpleShotz',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  
  return (
    <Head>
         
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
        
      ))}
        <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
