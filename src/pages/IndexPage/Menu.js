import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../styles/nuevoPin.css"

import MapView from "./MapView";

const Menu = () => {
  return (
    <div>
      <aside>
        <Link to="/nuevo-pin" className="boton-primario">Nuevo Marcador</Link>
        <Link to="/data" className="boton-primario">Ver datos registrados</Link>

        <div className="menu-text">
          <p>Buscan el punto mas cercano a tu posicion</p>
          <p>Da click para ver su horario</p>
          <p>Entra a su link para ver la informacion mas detallada</p>

        <input type="text" placeholder="Buscar Grupo"></input>
        <a href="#">

          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        </a>
        </div>
      </aside>
      <MapView />
    </div>
  );
}

export default Menu;