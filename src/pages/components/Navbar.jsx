import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
    <div className='logo'>Dhivya Saravanan</div>
    <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/products"><li>Products</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        

    </ul>
    <div><button onClick={() => navigate ("/login", {replace: true})}>Login</button></div>
</div>
  )
}

export default Navbar