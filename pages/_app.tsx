import 'styles/globals.scss'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const title = 'Rahul Rajkumar'
const description = 'Fast, composable, unstyled command menu for React'
const siteUrl = 'https://cmdk.paco.me'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title,
          description: description + '.',
          images: [
            {
              url: `${siteUrl}/og.png`,
              alt: title,
            },
          ],
        }}
      />
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
