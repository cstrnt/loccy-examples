import { getLocaleProps, useI18n } from '../src/locales';
import styles from '../styles/Home.module.css'

const Home = () => {
  const { t } = useI18n();
  return (
    <div className={styles.container}>
      <h1>Next-International + Loccy</h1>
      {t("revokeApikey")}
    </div>
  )
}


export const getStaticProps= getLocaleProps();

export default Home
