import { FC } from "react"

import useAuthStore from "stores/auth"

import Button from "components/button"
import Loading from "components/loading"

import { FiLogOut } from "react-icons/fi"

const Header: FC = () => {
  const { user, logout } = useAuthStore()

  return (
    <header className="flex flex-wrap items-center justify-center w-full px-2 py-3 shadow-lg min-h-16 gap-x-4 gap-y-2">
      {!user ? (
        <Loading />
      ) : (
        <>
          {user.photoURL && (
            <img className="w-10 h-10 rounded-full" src={user.photoURL} />
          )}

          {user.displayName && (
            <h4 className="text-lg font-semibold">{user.displayName}</h4>
          )}

          <Button onClick={logout} icon>
            <FiLogOut size={16} />
          </Button>
        </>
      )}
    </header>
  )
}

export default Header
