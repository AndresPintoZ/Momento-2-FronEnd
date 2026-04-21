import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RegistroPage() {
  return (
    <>
      <Navbar />
      <div className="w3-container w3-content" style={{maxWidth: '600px', marginTop: '100px', marginBottom: '100px'}}>
        <div className="w3-card-4 w3-round-xlarge w3-white">
          <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
            <h2 className="w3-center">Crear cuenta</h2>
          </div>
          <form className="w3-container w3-padding-24">
            <div className="w3-section">
              <label><i className="fa fa-user"></i> Nombre completo</label>
              <input className="w3-input w3-border w3-round" type="text" placeholder="Juan Pérez" required />
            </div>
            <div className="w3-section">
              <label><i className="fa fa-envelope"></i> Correo electrónico</label>
              <input className="w3-input w3-border w3-round" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="w3-section">
              <label><i className="fa fa-lock"></i> Contraseña</label>
              <input className="w3-input w3-border w3-round" type="password" placeholder="********" required />
            </div>
            <div className="w3-section">
              <label><i className="fa fa-calendar"></i> Fecha de nacimiento</label>
              <input className="w3-input w3-border w3-round" type="date" defaultValue="1990-01-01" />
            </div>
            <div className="w3-section">
              <label><i className="fa fa-venus-mars"></i> Género</label>
              <select className="w3-select w3-border w3-round">
                <option value="" disabled selected>Selecciona</option>
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="w3-section">
              <button type="button" className="w3-button w3-theme-d2 w3-round w3-block w3-section">
                <i className="fa fa-user-plus"></i> Registrarse
              </button>
            </div>
            <p className="w3-center">¿Ya tienes cuenta? <a href="#login">Inicia sesión</a>.</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
