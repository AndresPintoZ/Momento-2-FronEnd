import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState('General');

  const renderTab = () => {
    switch(activeTab) {
      case 'General':
        return (
          <div className="w3-padding-24">
            <h4>Información personal</h4>
            <div className="w3-section">
              <label>Nombre</label>
              <input className="w3-input w3-border w3-round" type="text" defaultValue="Juan Pérez" />
            </div>
            <div className="w3-section">
              <label>Correo electrónico</label>
              <input className="w3-input w3-border w3-round" type="email" defaultValue="juan@email.com" />
            </div>
            <div className="w3-section">
              <label>Biografía</label>
              <textarea className="w3-input w3-border w3-round" rows="3" defaultValue="Diseñador UI/UX. Amante del café."></textarea>
            </div>
            <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-save"></i> Guardar cambios</button>
          </div>
        );
      case 'Privacidad':
        return (
          <div className="w3-padding-24">
            <h4>Privacidad y seguridad</h4>
            <div className="w3-section">
              <label>¿Quién puede ver tu perfil?</label>
              <select className="w3-select w3-border w3-round">
                <option>Todos</option>
                <option selected>Solo amigos</option>
                <option>Solo yo</option>
              </select>
            </div>
            <div className="w3-section">
              <label>¿Quién puede enviarte solicitudes de amistad?</label>
              <select className="w3-select w3-border w3-round">
                <option>Todos</option>
                <option selected>Amigos de amigos</option>
              </select>
            </div>
            <div className="w3-section">
              <label>Cambiar contraseña</label>
              <input className="w3-input w3-border w3-round" type="password" placeholder="Nueva contraseña" />
            </div>
            <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-lock"></i> Actualizar privacidad</button>
          </div>
        );
      case 'Notificaciones':
        return (
          <div className="w3-padding-24">
            <h4>Preferencias de notificaciones</h4>
            <div className="w3-section">
              <label>
                <input type="checkbox" defaultChecked /> Recibir notificaciones de nuevos mensajes
              </label>
            </div>
            <div className="w3-section">
              <label>
                <input type="checkbox" defaultChecked /> Notificaciones de me gusta en mis publicaciones
              </label>
            </div>
            <div className="w3-section">
              <label>
                <input type="checkbox" /> Notificaciones de nuevas solicitudes de amistad
              </label>
            </div>
            <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-bell"></i> Guardar preferencias</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="w3-container w3-content" style={{maxWidth: '1000px', marginTop: '80px', marginBottom: '100px'}}>
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding-16 w3-theme-d2">
            <h2><i className="fa fa-cogs"></i> Configuración de la cuenta</h2>
          </div>

          {/* Pestañas */}
          <div className="w3-bar w3-theme-l4">
            {['General', 'Privacidad', 'Notificaciones'].map(tab => (
              <button 
                key={tab}
                className={`w3-bar-item w3-button ${activeTab === tab ? 'w3-theme-d1' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Contenido de pestañas */}
          {renderTab()}
        </div>
      </div>
      <Footer />
    </>
  );
}
