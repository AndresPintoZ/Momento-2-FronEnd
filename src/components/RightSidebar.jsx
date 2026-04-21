export default function RightSidebar() {
  return (
    <div className="w3-col m2">
      <div className="w3-card w3-round w3-white w3-center w3-padding-16">
        <p><i className="fa fa-calendar"></i> Próximos eventos</p>
        <p><strong>Reunión de diseño</strong><br />Viernes 15:00</p>
        <button className="w3-button w3-block w3-theme-l4">Info</button>
      </div>
      <br />
      <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p>ADS</p>
      </div>
    </div>
  );
}
