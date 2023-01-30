import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
const Navbar = () => {
    const {user} = useUser()
    return (
        <nav>
            <ul className="menu">
                
            {user !== null && <li><img alt="🤖" src="/logos/Logo.png" height="50EM"/></li>}
              <li>  <h1 style={{display: "inline"}}>Lost in translation</h1></li>
              </ul>
              
              <ul className="menu">
            {user !== null &&


                <li>
                    <NavLink to="/Profile">{user.username}</NavLink>
                </li>

            }
            </ul>
        </nav>
    )
}
export default Navbar