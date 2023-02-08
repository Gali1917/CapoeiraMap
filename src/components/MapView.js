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
            <Popup className="popup-mapa">
                <div>
                    <img src="https://scontent.fbog2-5.fna.fbcdn.net/v/t39.30808-6/304945393_10158912451718085_4106091627299183990_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iy7wKk3841EAX-1WsVJ&_nc_ht=scontent.fbog2-5.fna&oh=00_AfA1TtZpGHglrrBsbx_ktfcB8cNg5nG4JInAYiEdH_4s9g&oe=63E8E59D"></img>
                </div>
                <div>

                    Capoeira Morcego <br />
                    Domingos 10:00-12:00 <br />
                    <a href="https://wa.link/mfw4zo" target="_blank">Whatsapp</a>
                </div>
            </Popup>
        </Marker>
    </MapContainer>
}

export default MapView;