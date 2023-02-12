import React from "react";
import "../../styles/nuevoPin.css";
const NuevoPin = () => {

  return (
    <main>
      <h2>Nuevo Marcador!</h2>
      <form>
        <div className="label-input">
          <label>Nombre del Grupo:</label>
          <input type="text" placeholder="Oficina"></input>
        </div>
        <div className="label-input">
          <label>Telefono:</label>
          <input type="number" placeholder="3194573263"></input>
        </div>
        <div className="label-input">
          <label>Imagen:</label>
          <input type="text" placeholder="https://www.mestreray.com/wp-content/uploads/2018/04/MESTRE-RAY-LOGO.png"></input>
        </div>
        <div className="label-input">
          <label>Latitud:</label>
          <input type="number" placeholder="4.58617"></input>
        </div>
        <div className="label-input">
          <label>Longitud:</label>
          <input type="number" placeholder="-74.2028325"></input>
        </div>
        <div className="label-input descripcion">
          <label>Descripcion:</label>
          <textarea type="text" placeholder="Entrenamiento basico de Capoeira, libre para todas las edades."></textarea>
        </div>
        <div className="label-input">
          <label>Horario:</label>
          <input type="text" placeholder="09:00-12:00"></input>
        </div>
        <div className="label-input">
          <label>Dia:</label>
          <input type="text" placeholder="Sabados y Domingos"></input>
        </div>
        <div className="label-input">
          <label>Costo:</label>
          <input type="text" placeholder="10.000"></input>
        </div>
        <div className="label-input">
          <label>Tipo:</label>
          <input type="text" placeholder="Capoeira basica"></input>
        </div>
      </form>
    </main>
  );
}

export default NuevoPin;