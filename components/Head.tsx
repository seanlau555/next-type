import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

type Props = {
  title?: string
  image?: string
  url?: string
  type?: string
  description?: string
}

const HeadMeta = (props: Props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <meta
        property={'og:image'}
        content={props.image || process.env.ogImgPath}
      />
      <meta property={'og:title'} content={props.title} />
      <meta property={'og:description'} content={props.description} />
      {props.url && <meta property={'og:url'} content={props.url} />}
      {props.type && <meta property={'og:type'} content={props.type} />}
      <meta name={'description'} content={props.description} />
      <meta
        name={'twitter:image'}
        content={props.image || process.env.ogImgPath}
      />
      <meta name={'twitter:title'} content={props.title} />
      <meta name={'twitter:description'} content={props.description} />
      <meta property={'fb:app_id'} content={'265533807199375'} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TWGH4WD');
              `,
        }}
      />
    </Head>
  </>
)

export default HeadMeta
// <Script
//   src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
//   strategy="afterInteractive"
// />
// <Script id="google-tag-manager-script">
//   {`
//     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//     })(window,document,'script','dataLayer','GTM-TWGH4WD');
// `}
// </Script>
