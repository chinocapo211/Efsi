import correo from '../img/images.png';
function Contacto() {
  return (
    <div id="container4">
      <h1>Contactame!</h1>
      <div className="card" id="conta">
        <div className="card-inner">
          <div className="card-front">
            <img src={correo} alt="img7" />
          </div>
          <div className="card-back">
            <h3>felipe.blaustein@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacto;