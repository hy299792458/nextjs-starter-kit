import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }: AppProps) {
  const { title, description, icon } = pageProps.seoProps || {}
  return (
    <NextIntlProvider
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }
        }
      }}
      now={new Date(pageProps.now)}
      messages={pageProps.messages}
    >
      <Layout title={title} description={description} icon={icon}>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  )
}

export default MyApp
