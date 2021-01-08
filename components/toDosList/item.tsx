import Button from "components/button"
import { FC, useState } from "react"
import ToDo from "types/todo"

import {
  MdEdit,
  MdDelete,
  MdExpandLess,
  MdExpandMore,
  MdSave,
} from "react-icons/md"

interface ToDosUpdate {
  name: string
  description: string
}

interface ToDosListItemProps {
  toDo: ToDo
}

const ToDosListItem: FC<ToDosListItemProps> = ({ toDo }) => {
  const [opened, setOpened] = useState<boolean>(false)
  const toggleOpen = () => setOpened(!opened)

  const [editing, setEditing] = useState<boolean>(false)
  const [updatedToDo, setUpdatedToDo] = useState<ToDosUpdate>({
    name: toDo.name,
    description: toDo.description,
  })
  const handleUpdatedChange = (name: "name" | "description") => ({
    target: { value },
  }: any) => setUpdatedToDo({ ...updatedToDo, [name]: value })

  const handleToggleDone = () => toDo.check()

  const handleDelete = () => toDo.remove()
  const handleEdit = () => {
    setEditing(true)

    if (!opened) setOpened(true)
  }
  const handleSave = () => toDo.update(updatedToDo) && setEditing(false)

  return (
    <div className="flex flex-col items-center w-full p-3 border-2 border-gray-200 rounded-lg gap-y-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-2">
          <Button icon onClick={toggleOpen}>
            {opened ? <MdExpandLess /> : <MdExpandMore />}
          </Button>

          <input
            type="checkbox"
            className="w-5 h-5"
            checked={toDo.done}
            onChange={handleToggleDone}
          />
        </div>

        {editing ? (
          <input
            className="w-full px-2 mx-3 text-lg border-2 border-gray-200 rounded-sm"
            onChange={handleUpdatedChange("name")}
            value={updatedToDo.name}
          />
        ) : (
          <h6 className="text-lg">{toDo.name}</h6>
        )}

        <div className="flex items-center gap-x-2">
          {editing ? (
            <Button icon onClick={handleSave}>
              <MdSave />
            </Button>
          ) : (
            <Button icon onClick={handleEdit}>
              <MdEdit />
            </Button>
          )}
          <Button icon onClick={handleDelete}>
            <MdDelete />
          </Button>
        </div>
      </div>

      {opened && (
        <>
          <hr className="w-5/6 border-t-2 border-gray-200" />

          {editing ? (
            <textarea
              className="w-5/6 px-2 border-2 border-gray-200 rounded-sm text-md"
              onChange={handleUpdatedChange("description")}
              value={updatedToDo.description}
            />
          ) : (
            <div className="w-5/6 text-center text-md">{toDo.description}</div>
          )}
        </>
      )}
    </div>
  )
}

export default ToDosListItem
