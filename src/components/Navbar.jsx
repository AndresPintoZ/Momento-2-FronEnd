import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const openNav = () => {
    const navDemo = document.getElementById("navDemo");
    if (navDemo.className.indexOf("w3-show") === -1) {
      navDemo.className += " w3-show";
    } else {
      navDemo.className = navDemo.className.replace(" w3-show", "");
    }
  };

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large navbar-container">
          <a 
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" 
            onClick={openNav}
          >
            <i className="fa fa-bars"></i>
          </a>
          
          <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Logo
          </Link>
          
          <Link to="/perfil" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Perfil">
            <i className="fa fa-user"></i>
          </Link>
          
          <Link to="/mensajes" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mensajes">
            <i className="fa fa-envelope"></i>
          </Link>
          
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-button w3-padding-large" title="Notificaciones">
              <i className="fa fa-bell"></i>
              <span className="w3-badge w3-right w3-small w3-green">3</span>
            </button>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width: '300px'}}>
              <a href="#" className="w3-bar-item w3-button">Una nueva solicitud de amistad</a>
              <a href="#" className="w3-bar-item w3-button">John Doe publicó en tu muro</a>
              <a href="#" className="w3-bar-item w3-button">Jane le gusta tu publicación</a>
            </div>
          </div>
          
          <Link to="/configuracion" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Configuración">
            <i className="fa fa-cog"></i>
          </Link>
          
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Mi cuenta">
            <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" alt="Avatar" />
          </a>
        </div>
      </div>

      {/* Navbar móvil */}
      <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
        <Link to="/" className="w3-bar-item w3-button w3-padding-large">Inicio</Link>
        <Link to="/perfil" className="w3-bar-item w3-button w3-padding-large">Perfil</Link>
        <Link to="/mensajes" className="w3-bar-item w3-button w3-padding-large">Mensajes</Link>
        <Link to="/configuracion" className="w3-bar-item w3-button w3-padding-large">Configuración</Link>
        <Link to="/grupos" className="w3-bar-item w3-button w3-padding-large">Grupos</Link>
      </div>
    </>
  );
}
