import firebase from "firebase"

export default class ToDo {
  id: string
  name: string
  description: string
  done: boolean

  constructor(public doc: firebase.firestore.DocumentSnapshot) {
    const { name, description, done } = doc.data() ?? {
      name: "",
      description: "",
    }

    this.id = doc.id
    this.name = name
    this.description = description
    this.done = done
  }

  update(newData: object) {
    return this.doc.ref.update(newData)
  }

  remove() {
    return this.doc.ref.delete()
  }

  check() {
    return this.update({ done: !this.done })
  }
}
