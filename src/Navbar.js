import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Classifica Accessibilità Comuni Italiani</h1></Link>
      <div className="links">
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#009688',
          borderRadius: '10px'
        }}>Aggiungi</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;