import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
<nav className="NavBar"
style={{}}>
<ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/LoginPage">Login</NavLink></li>
<li><NavLink to="/CatsPage">Cats</NavLink></li>
<li><NavLink to="/BitcoinPage">Bitcoin</NavLink></li>
</ul>
</nav>
)
}
