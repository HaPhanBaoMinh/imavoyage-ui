// src/pages/index.js

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation("header")

  return (
    <>
      <h1>{t("header")}</h1>
    </>
  )
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}