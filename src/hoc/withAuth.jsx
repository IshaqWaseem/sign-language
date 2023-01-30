import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

//do not allow access to pages if localstorage does not contain a user
//this is to restrict access to pages through URL manipulation and to send logged out users back to home page
//this is done by sending them to home page
const withAuth = Component => props => {
    const {user} = useUser()
    if (user !== null){
        return <Component{...props}/>
    }
    else {
        return <Navigate to="/"/>

    }
}
export default withAuth