import { Link, NavLink } from 'react-router-dom';
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
    <div className="w3-top">
      <div className="w3-bar w3-white w3-card-2 w3-left-align w3-large" style={{ padding: '8px 24px', lineHeight: '45px' }}>
        {/* Logo */}
        <Link to="/" className="w3-bar-item w3-button w3-hover-none" style={{ fontWeight: '900', fontSize: '24px', color: '#6366f1' }}>
          <i className="fa fa-share-alt w3-margin-right"></i>RedSocial
        </Link>

        {/* Rutas Principales */}
        <div className="w3-hide-small">
          <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-hover-light-grey" title="Inicio"><i className="fa fa-home"></i></Link>
          <Link to="/mensajes" className="w3-bar-item w3-button w3-padding-large w3-hover-light-grey" title="Mensajes"><i className="fa fa-envelope"></i></Link>
          <Link to="/grupos" className="w3-bar-item w3-button w3-padding-large w3-hover-light-grey" title="Grupos"><i className="fa fa-group"></i></Link>
        </div>

        {/* Acceso a Configuración y Perfil (Dropdown) */}
        <div className="w3-dropdown-hover w3-right">
          <button className="w3-button w3-round-xxlarge w3-hover-light-grey" style={{ padding: '6px 12px' }}>
            <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{height:'35px',width:'35px', marginRight: '8px'}} alt="Avatar" />
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4 w3-animate-opacity w3-round-large" style={{right:0, width:'240px', marginTop: '12px', padding: '8px 0'}}>
            <Link to="/perfil" className="w3-bar-item w3-button w3-padding-large"><i className="fa fa-user w3-margin-right"></i>Mi Perfil</Link>
            <Link to="/configuracion" className="w3-bar-item w3-button w3-padding-large"><i className="fa fa-cog w3-margin-right"></i>Configuración</Link>
            <hr style={{margin: '4px 0'}} />
            <Link to="/login" className="w3-bar-item w3-button w3-padding-large w3-text-red"><i className="fa fa-sign-out w3-margin-right"></i>Cerrar sesión</Link>
          </div>
        </div>

        <button className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large" onClick={openNav}>
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Menú Móvil */}
      <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
        <Link to="/" className="w3-bar-item w3-button w3-padding-large">Inicio</Link>
        <Link to="/perfil" className="w3-bar-item w3-button w3-padding-large">Perfil</Link>
        <Link to="/mensajes" className="w3-bar-item w3-button w3-padding-large">Mensajes</Link>
        <Link to="/configuracion" className="w3-bar-item w3-button w3-padding-large">Configuración</Link>
        <Link to="/grupos" className="w3-bar-item w3-button w3-padding-large">Grupos</Link>
      </div>
    </div>
  );
}
