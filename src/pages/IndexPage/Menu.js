import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <main>
            <aside>
                <p>Buscan el punto mas cercano a tu posicion</p>
                <p>Da click para ver su horario</p>
                <p>Entra a su link para ver la informacion mas detallada</p>
                <input type="text" placeholder="Buscar Grupo"></input>
                <a href="#">

                <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
                </a>
                {/* <Link  */}
            </aside>
        </main>
    );
}

export default Menu;