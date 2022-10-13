import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useI18n } from '../src/locales'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { t } = useI18n();
  return (
    <div className={styles.container}>
      <h1>Next-International + Loccy</h1>
      {t("revokeApikey")}
    </div>
  )
}

export default Home
