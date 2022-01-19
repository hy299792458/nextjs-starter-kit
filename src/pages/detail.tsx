import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useTranslations } from 'use-intl'
import { getIntlProps } from '../util/getIntlProps'

type PageProps = { timestamp: string }

const namespace = 'Detail'

const Detail: NextPage<PageProps> = () => {
  const t = useTranslations(namespace)
  const updatedAt = new Date()
  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <p>
        {t('updatedAt', {
          updatedAt
        })}
      </p>
      <Link href={'/'}>
        <a>Home page</a>
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  locale
}) => {
  const timestamp = new Date().toLocaleString()
  return {
    props: {
      ...(await getIntlProps([namespace], locale)),
      seoProps: {
        title: 'Detail',
        description: 'Detail page description'
      },
      timestamp
    }
  }
}

export default Detail
