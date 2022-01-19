import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useTranslations } from 'use-intl'
import { getIntlProps } from '../util/getIntlProps'

const namespace = 'Home'

const Home: NextPage = () => {
  const t = useTranslations(namespace)
  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <p>{t('lang')}</p>
      <Link href={'/detail'}>
        <a>Detail page</a>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getIntlProps([namespace], locale)),
      seoProps: {
        title: 'Home',
        description: 'Home page description'
      }
    }
  }
}

export default Home
