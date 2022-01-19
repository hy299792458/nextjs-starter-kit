import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import { Header } from './header'
import { Footer } from './footer'

export const Layout: FunctionComponent<{
  title: string
  description: string
  icon: string
  image?: string
  robots?: {
    index: boolean
    follow: boolean
  }
}> = props => {
  const {
    title = 'nextjs-starter-kit',
    description = 'nextjs scaffold with basic configurations and MVC implementations',
    icon = '/favicon.ico',
    image = '',
    robots = {
      index: false,
      follow: false
    }
  } = props
  const robotsTag = `${robots.index ? 'index' : 'noindex'},${
    robots.follow ? 'follow' : 'nofollow'
  }`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
        <link rel="icon" href={icon} />
        {image && <meta name="og:image" property="og:image" content={image} />}
        <meta name="robots" content={robotsTag} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
