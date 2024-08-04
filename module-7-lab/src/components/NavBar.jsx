import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
<nav className="NavBar"
style={{}}>
<ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li>
<li><NavLink to="/cats">Cats</NavLink></li>
<li><NavLink to="/bitcoin">Bitcoin</NavLink></li>
</ul>
</nav>
)
}
