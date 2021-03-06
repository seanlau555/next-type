import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { aboutUsContent } from 'common/locales'
import Link from 'next/link'
import HeadMeta from 'components/Head'
import Script from 'next/script'
// import Head from 'next/head'

type NewsCardProps = {
  title: string
  content: string
}

const NewsCard = (item: NewsCardProps) => {
  return <div>{item.title}</div>
}

//       <Head>
//         <title>TV</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

const AboutUs: NextPage = (props) => {
  // const { locale, locales, defaultLocale, asPath } = useRouter()
  const { asPath } = useRouter()
  const { locale, locales, defaultLocale } = props.context

  const { title, content } = aboutUsContent[locale]

  console.log(locale, locales, defaultLocale)

  return (
    <div>
      <div
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWGH4WD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  `,
        }}
      />
      <HeadMeta />
      <div>
        <div
          style={{
            padding: '4px',
            marginRight: '4px',
          }}
        >
          <span>Current Language: </span>
          <span
            style={{
              borderRadius: '3px',
              backgroundColor: 'blue',
              color: 'white',
              padding: '2px',
            }}
          >
            {locale}
          </span>
        </div>
        <Link activeClassName={locale === 'en'} href={asPath} locale="en">
          en
        </Link>

        <Link
          activeClassName={locale === 'zh-hant'}
          href={asPath}
          locale="zh-hant"
        >
          zh-hant
        </Link>
        <Link
          activeClassName={locale === 'zh-hans'}
          href={asPath}
          locale="zh-hans"
        >
          zh-hans
        </Link>
      </div>

      <div>
        <div>
          <h3>{title}</h3>
        </div>

        <div>
          {content.map(
            (newsItem: { title: string; content: string }, i: number) => (
              <NewsCard key={i} item={newsItem} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { context },
  }
}

export default AboutUs
