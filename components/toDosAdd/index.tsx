import Button from "components/button"
import { FC, useState } from "react"
import { MdAdd } from "react-icons/md"
import useToDosStore from "stores/toDos"

interface ToDosNew {
  name: string
  description: string
}

const ToDosAdd: FC = () => {
  const { addToDo } = useToDosStore()

  const [newToDo, setNewToDo] = useState<ToDosNew>({
    name: "",
    description: "",
  })
  const handleNewChange = (name: "name" | "description") => ({
    target: { value },
  }: any) => setNewToDo({ ...newToDo, [name]: value })

  const handleAdd = () => addToDo(newToDo.name, newToDo.description)

  return (
    <div className="flex flex-col items-center w-full max-w-md p-3 border-2 border-gray-200 rounded-lg gap-y-6">
      <input
        placeholder="Name"
        className="w-full px-2 mx-3 text-lg border-2 border-gray-200 rounded-sm"
        onChange={handleNewChange("name")}
        value={newToDo.name}
      />
      <div className="flex items-start justify-between w-full gap-x-4">
        <textarea
          placeholder="Description"
          className="w-full px-2 border-2 border-gray-200 rounded-sm text-md"
          onChange={handleNewChange("description")}
          value={newToDo.description}
        />

        <Button icon onClick={handleAdd}>
          <MdAdd size={20} />
        </Button>
      </div>
    </div>
  )
}

export default ToDosAdd
