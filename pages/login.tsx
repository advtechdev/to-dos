import { FC } from "react"
import useAuthStore from "stores/auth"

import Button from "components/button"

import { FcGoogle } from "react-icons/fc"

const LoginPage: FC = () => {
  const login = useAuthStore((store) => store.loginPopup)

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Button onClick={login}>
        <FcGoogle size={25} className="mr-5" /> Login with google
      </Button>
    </div>
  )
}

export default LoginPage
