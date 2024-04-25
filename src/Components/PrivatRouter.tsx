import Store from "../Zustand/Store"
import { Navigate } from "react-router-dom";
const PrivatRouter = ({ children }: Children) => {
    const { IsLogin } = Store();
    if (!IsLogin) {
       return <Navigate to='/Login'></Navigate>
    }
    return <>{children}</>

}

export default PrivatRouter

type Children = {
    children:React.ReactNode
}