import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GruposPage() {
  return (
    <>
      <Navbar />
      <div className="w3-container w3-content" style={{maxWidth: '1200px', marginTop: '80px', marginBottom: '100px'}}>
        <div className="w3-row-padding">
          {/* Columna izquierda: Mis grupos */}
          <div className="w3-col m6">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding-16 w3-theme-d2">
                <h3><i className="fa fa-group"></i> Mis grupos</h3>
              </div>
              <ul className="w3-ul">
                <li className="w3-padding-16">
                  <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-left w3-circle w3-margin-right" style={{width: '50px'}} alt="Grupo" />
                  <span className="w3-large">Diseñadores UI/UX</span><br />
                  <span className="w3-opacity">1.2k miembros · 15 publicaciones nuevas</span>
                  <button className="w3-button w3-small w3-theme-d2 w3-right w3-round">Ver grupo</button>
                </li>
                <li className="w3-padding-16">
                  <img src="https://www.w3schools.com/w3images/avatar5.png" className="w3-left w3-circle w3-margin-right" style={{width: '50px'}} alt="Grupo" />
                  <span className="w3-large">Desarrollo Web</span><br />
                  <span className="w3-opacity">3.4k miembros · 8 publicaciones nuevas</span>
                  <button className="w3-button w3-small w3-theme-d2 w3-right w3-round">Ver grupo</button>
                </li>
                <li className="w3-padding-16">
                  <img src="https://www.w3schools.com/w3images/avatar6.png" className="w3-left w3-circle w3-margin-right" style={{width: '50px'}} alt="Grupo" />
                  <span className="w3-large">Fotografía Creativa</span><br />
                  <span className="w3-opacity">856 miembros · 3 publicaciones nuevas</span>
                  <button className="w3-button w3-small w3-theme-d2 w3-right w3-round">Ver grupo</button>
                </li>
              </ul>
              <div className="w3-container w3-padding-16">
                <button className="w3-button w3-block w3-theme-l1"><i className="fa fa-plus"></i> Crear nuevo grupo</button>
              </div>
            </div>
          </div>

          {/* Columna derecha: Grupos sugeridos */}
          <div className="w3-col m6">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding-16 w3-theme-d1">
                <h3><i className="fa fa-star"></i> Grupos sugeridos</h3>
              </div>
              <ul className="w3-ul">
                <li className="w3-padding-16">
                  <img src="https://www.w3schools.com/w3images/forest.jpg" className="w3-left w3-circle w3-margin-right" style={{width: '50px', height: '50px', objectFit: 'cover'}} alt="Grupo" />
                  <span className="w3-large">Viajeros del mundo</span><br />
                  <span className="w3-opacity">5.1k miembros</span>
                  <button className="w3-button w3-small w3-green w3-right w3-round"><i className="fa fa-plus"></i> Unirse</button>
                </li>
                <li className="w3-padding-16">
                  <img src="https://www.w3schools.com/w3images/lights.jpg" className="w3-left w3-circle w3-margin-right" style={{width: '50px', height: '50px', objectFit: 'cover'}} alt="Grupo" />
                  <span className="w3-large">Tecnología y gadgets</span><br />
                  <span className="w3-opacity">8.2k miembros</span>
                  <button className="w3-button w3-small w3-green w3-right w3-round"><i className="fa fa-plus"></i> Unirse</button>
                </li>
                <li className="w3-padding-16">
                  <img src="https://www.w3schools.com/w3images/nature.jpg" className="w3-left w3-circle w3-margin-right" style={{width: '50px', height: '50px', objectFit: 'cover'}} alt="Grupo" />
                  <span className="w3-large">Cocina y Recetas</span><br />
                  <span className="w3-opacity">2.9k miembros</span>
                  <button className="w3-button w3-small w3-green w3-right w3-round"><i className="fa fa-plus"></i> Unirse</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
