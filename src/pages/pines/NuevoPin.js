import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/nuevoPin.css";
const NuevoPin = () => {

  const [nombreGrupo, setNombreGrupo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [imagen, setImagen] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [horario, setHorario] = useState('');
  const [dia, setDia] = useState('');
  const [costo, setCosto] = useState('');
  const [tipo, setTipo] = useState('');

  const action = () => {
    NuevoPin();
  };

  const nuevoPin = () => {
    var pines = {
      nombreGrupo: nombreGrupo,
      telefono: telefono,
      imagen: imagen,
      latitud: latitud,
      longitud: longitud,
      descripcion: descripcion,
      horario: horario,
      dia: dia,
      costo: costo,
      tipo: tipo
    }
    axios.post('http://localhost:5005/api/pin', pines)
      .then(res => {

      })
      .then(err => {
        console.log(err);
      })
  };
  return (
    <div>
      <h2>Nuevo Marcador!</h2>
      <form>
        <div className="label-input">
          <label>Nombre del Grupo:</label>
          <input 
          id="nombre_grupo" 
          type="text" 
          placeholder="Oficina"
          value={nombreGrupo} onChange={(e) => {setNombreGrupo(e.target.value)}}
          required
          ></input>
          
        </div>
        <div className="label-input">
          <label>Telefono:</label>
          <input 
          id="telefono" 
          type="number" 
          placeholder="3194573263"
          value={telefono} onChange={(e) => {setTelefono(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input">
          <label>Imagen:</label>
          <input 
          id="imagen" 
          type="text" 
          placeholder="https://www.mestreray.com/wp-content/uploads/2018/04/MESTRE-RAY-LOGO.png"
          value={imagen} onChange={(e) => {setImagen(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input">
          <label>Latitud:</label>
          <input 
          id="latitud" 
          type="number" 
          placeholder="4.58617"
          value={latitud} onChange={(e) => {setLatitud(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input">
          <label>Longitud:</label>
          <input 
          id="longitud" 
          type="number" 
          placeholder="-74.2028325"
          value={longitud} onChange={(e) => {setLongitud(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input descripcion">
          <label>Descripcion:</label>
          <textarea 
          id="descripcion" 
          type="text" 
          placeholder="Entrenamiento basico de Capoeira, libre para todas las edades."
          value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}}
          required
          ></textarea>
        </div>
        <div className="label-input">
          <label>Horario:</label>
          <input 
          id="horario" 
          type="text" 
          placeholder="09:00-12:00"
          value={horario} onChange={(e) => {setHorario(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input">
          <label>Dia:</label>
          <input 
          id="diaa" 
          type="text" 
          placeholder="Sabados y Domingos"
          value={dia} onChange={(e) => {setDia(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input">
          <label>Costo:</label>
          <input 
          id="costo" 
          type="text" 
          placeholder="10.000"
          value={costo} onChange={(e) => {setCosto(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input">
          <label>Tipo:</label>
          <input 
          id="tipo" 
          type="text" 
          placeholder="Capoeira basica"
          value={tipo} onChange={(e) => {setTipo(e.target.value)}}
          required
          ></input>
        </div>
        <div className="label-input botones-form">
          <Link to="/" className="boton-primario">Atras!</Link>
          <Link to="/" className="boton-primario" onClick={nuevoPin}>Crear!</Link>

        </div>

      </form>
    </div>
  );
}

export default NuevoPin;