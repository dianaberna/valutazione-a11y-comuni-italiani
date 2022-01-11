import { Link } from "react-router-dom";

const NavbarCustom = () => {
  return (
    <nav className="navbar">
      <Link to="/">home</Link>
      <div className="links">
        <Link to="/">Dati</Link>
        <Link to="/">Progetto</Link>
        <Link to="/">Criteri</Link>
        <Link to="/">Idee</Link>
      </div>
    </nav>
  );
}
 
export default NavbarCustom;