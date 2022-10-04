import CartWidget from '../components/CartWidget';
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    
    <div className="navbar bg-neutral text-neutral-content">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">MUSHI3D</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link></li>
        <li tabIndex={0}>
          <Link to='/shop' className="btn btn-ghost normal-case text-xl">Shop</Link>

          
        </li>
        <li>
        <Link to='/contact' className="btn btn-ghost normal-case text-xl">Contact</Link>
        </li>
      </ul>
      
    </div>
    <>
    <CartWidget></CartWidget>
    </>
  </div>
  )
}
export default NavBar