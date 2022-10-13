import "../styles/globals.css";
import type { AppProps } from "next/app";
import { I18nProvider } from "../src/locales";

function MyApp({
  Component,
  pageProps,
}: AppProps & { pageProps: { locale: any } }) {
  return (
    <I18nProvider locale={pageProps.locale}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp;
