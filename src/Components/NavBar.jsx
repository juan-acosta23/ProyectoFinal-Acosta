import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">Deportes Acosta</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/category/Gym" className="nav-link">Gym</Link>
        <Link to="/category/Suplementos" className="nav-link">Suplementos</Link>
        <Link to="/category/Boxeo" className="nav-link">Boxeo</Link>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar