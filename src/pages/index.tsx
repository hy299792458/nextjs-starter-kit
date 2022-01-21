import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useTranslations } from 'use-intl'
import { getIntlProps } from '../util/getIntlProps'
import { useRouter } from 'next/router'

const namespace = 'Home'

const Home: NextPage = () => {
  const t = useTranslations(namespace)
  const locale = useRouter().locale
  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <Link href={'/'} locale={locale === 'en' ? 'zh' : 'en'}>
        <p>{t('lang')}</p>
      </Link>
      <Link href={'/detail'}>
        <a>{t('detailPageLink')}</a>
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...getIntlProps([namespace], locale),
      seoProps: {
        title: 'Home',
        description: 'Home page description'
      }
    }
  }
}

export default Home
