import { FC } from "react"
interface ButtonProps {
  onClick?: () => void

  icon?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({ children, onClick, icon, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center focus:bg-gray-200 border-2 border-gray-200 ${
      icon ? "rounded-full p-2" : "rounded-md px-4 py-2"
    } ${className ?? ""}`}
    children={children}
  />
)

export default Button
