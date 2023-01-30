import { Link } from "react-router-dom"
import { clearUser } from "../../api/user"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"


const ProfileActions = () => {
    const {user,setUser} = useUser()
    
    const handleClearClick = async () =>  {
        if (window.confirm('Are you sure?')) {
            const response = await clearUser(user.id)
            setUser(response)
            storageSave(STORAGE_KEY_USER, response)
        }
}
    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        } }
    return (
       <ul>
        <li><Link to="/Translation">Back to translation</Link></li>
        <li><button onClick={handleClearClick}>Clear history</button></li>
        <li><button onClick={handleLogoutClick}>Logout</button></li>
       </ul>
    )
}
export default ProfileActions