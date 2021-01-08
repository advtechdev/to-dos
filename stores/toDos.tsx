import create from "zustand"

import { FC, useEffect } from "react"

import useAuthStore from "./auth"

import ToDo from "../types/todo"

import firebase from "firebase"
import "firebase/firestore"

type ToDosStoreTypes = {
  todos: undefined | ToDo[]
  lastSnap:
    | undefined
    | firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>

  Provider: FC

  onEvent: (uid: string) => () => void

  addToDo: (name: string, description: string) => void
}

const useToDosStore = create<ToDosStoreTypes>((set, get) => ({
  todos: undefined,
  lastSnap: undefined,

  Provider: ({ children }) => {
    const user = useAuthStore((store) => store.user)

    const onEvent = useToDosStore((store) => store.onEvent)

    useEffect(() => {
      if (user) return onEvent(user.uid)
    }, [user])

    return <>{children}</>
  },

  onEvent: (uid) => {
    const { lastSnap } = get()

    return firebase
      .firestore()
      .collection("toDos")
      .where("owner", "==", uid)
      .onSnapshot((snap) => {
        if (!lastSnap || !snap.isEqual(lastSnap))
          set({ todos: snap.docs.map((doc) => new ToDo(doc)) })
      })
  },

  addToDo: (name, description) => {
    const user = useAuthStore.getState().user

    if (user)
      firebase
        .firestore()
        .collection("toDos")
        .add({ name, description, done: false, owner: user.uid })
  },
}))

export default useToDosStore
