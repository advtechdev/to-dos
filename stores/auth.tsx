import { FC, useEffect } from "react"
import create from "zustand"

import firebase from "firebase"
import "firebase/auth"
import { useRouter } from "next/router"

type AuthStoreTypes = {
  user: undefined | null | firebase.User

  Provider: FC

  onEvent: () => firebase.Unsubscribe

  loginPopup: () => void
  logout: () => void
}

const useAuthStore = create<AuthStoreTypes>((set) => ({
  user: undefined,

  Provider: ({ children }) => {
    const { pathname, replace } = useRouter()

    const { user, onEvent } = useAuthStore()

    useEffect(onEvent, [])

    useEffect(() => {
      if (user && pathname === "/login") replace("/")

      if (user === null && pathname !== "/login") replace("/login")
    }, [user])

    return <>{children}</>
  },

  onEvent: () => firebase.auth().onAuthStateChanged((user) => set({ user })),

  loginPopup: () =>
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()),

  logout: () => firebase.auth().signOut(),
}))

export default useAuthStore
