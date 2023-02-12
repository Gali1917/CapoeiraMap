import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/data.css";
import axios from "axios";
import { useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5005/api/pin/");
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  // const getData = async () => {
  //     try{
  //       const respuesta = await axios.get("http://localhost:5005/api/pin/");
  //       console.log(respuesta.data);
  //     }
  //     catch (error){
  //       console.error(error);
  //     }
  // }
  return (
    <div>
      <h2>Data Registrada!</h2>

      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Imagen</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Descripcion</th>
              <th>Horario</th>
              <th>Dia</th>
              <th>Costo</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
              {data.map(result => (
            <tr key={result._id}>
                  <td key={result._id}>{result.nombreGrupo}</td>
                  <td>{result.telefono}</td>
                  <td>{result.imagen}</td>
                  <td>{result.latitud}</td>
                  <td>{result.longitud}</td>
                  <td>{result.descripcion}</td>
                  <td>{result.horario}</td>
                  <td>{result.dia}</td>
                  <td>{result.costo}</td>
                  <td>{result.tipo}</td>
            </tr>
              ))}
          </tbody>
        </table>


      </div>
      <Link to="/" className="boton-primario">Atras!</Link>
    </div>
  );
}
export default Data;