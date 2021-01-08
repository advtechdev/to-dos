import { FC } from "react"

import useToDosStore from "stores/toDos"

import Loading from "components/loading"
import ToDosListItem from "components/toDosList/item"

const ToDosList: FC = () => {
  const toDos = useToDosStore((store) => store.todos)

  return (
    <div className="flex flex-col items-center w-full max-w-md gap-y-3">
      {!toDos ? (
        <Loading />
      ) : (
        toDos.map((toDo) => <ToDosListItem key={toDo.id} toDo={toDo} />)
      )}
    </div>
  )
}

export default ToDosList
