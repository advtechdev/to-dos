import { FC } from "react"
import { AppProps } from "next/app"

import useAuthStore from "stores/auth"
import useToDosStore from "stores/toDos"

import "firebase.config"

import "../styles/globals.css"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const AuthProvider = useAuthStore((store) => store.Provider)
  const ToDosProvider = useToDosStore((store) => store.Provider)

  return (
    <AuthProvider>
      <ToDosProvider>
        <Component {...pageProps} />
      </ToDosProvider>
    </AuthProvider>
  )
}

export default App
