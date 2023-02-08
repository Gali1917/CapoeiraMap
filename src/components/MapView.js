import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "../styles/mapView.css";

const MapView = () => {
    return <MapContainer className="mapa" center={[4.7350214, -74.1071767]} zoom={17} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[4.7350214, -74.1071767]}>
      <Popup>
        Capoeira Morcegin <br /> Puño, pata y porro <br /> Domingos 10:00-12:00
      </Popup>
    </Marker>
  </MapContainer>
}

export default MapView;