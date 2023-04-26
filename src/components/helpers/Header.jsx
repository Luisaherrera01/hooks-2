import {Link} from "react-router-dom"
import aguaNav from "../../imagenes/aguaNav.jpg"



const Header = () => {
  return (
    <header className="header">
      <section>
        <img src={aguaNav}  alt="Logo"/>
      </section>
        <nav className="nav">
            <div className="link1">
            <Link to={"/"}>Home</Link>
            </div>
            <div className="link2">
            <Link to={"/usuarios"}>Usuarios</Link>
            </div>                    
        </nav>
    </header>
  )
}

export default Header