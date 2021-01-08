import { FC } from "react"
import Head from "next/head"

import Header from "components/layout/header"

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>To Do</title>

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="flex flex-col items-center w-full px-4 mt-8 gap-y-8">
      {children}
    </main>
  </>
)

export default Layout
