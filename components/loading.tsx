import { FC } from "react"
import { ClipLoader } from "react-spinners"

export interface LoadingProps {
  size?: number
}

const Loading: FC<LoadingProps> = ({ size = 35 }) => <ClipLoader size={size} />

export const LoadingPage: FC = () => (
  <div className="flex items-center justify-center w-screen h-screen">
    <Loading size={60} />
  </div>
)

export default Loading
