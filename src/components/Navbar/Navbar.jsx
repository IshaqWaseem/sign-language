import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {
    const {user} = useUser()
    return (
        <nav>
            <ul>
                <li>Lost in translation</li>
            </ul>
            {user !== null &&

                <ul>
                <li>
                    <NavLink to="/Translation">Translation</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}
export default Navbar