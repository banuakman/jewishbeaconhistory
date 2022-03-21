import React from "react";
import "./style.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { LocationMarker } from "./LocationMarker";
import { useNavigate  } from "react-router-dom";

var icon = (value) => L.divIcon({
  className: 'leaflet-div-icon',
  html: "<div class='marker-pin'>"+value+"</div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});


function Map() {

  let navigate = useNavigate();

  return (
    <div className="map-container">
      <MapContainer style={{ height: "100%", width: "100%" }} center={[41.50492, -73.96988]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.50824, -73.97739]} icon={icon(1)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-1");
            },
          }}
        />
        <Marker position={[41.50818, -73.97517]} icon={icon(2)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-2");
            },
          }}/>
        <Marker position={[41.50644, -73.97276]} icon={icon(3)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-3");
            },
          }}/>
        <Marker position={[41.50531, -73.97095]} icon={icon(4)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-4");
            },
          }}/>
        <Marker position={[41.50492, -73.96988]} icon={icon(5)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-5");
            },
          }}/>
        <Marker position={[41.50336, -73.96727]} icon={icon(6)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-6");
            },
          }}/>
        <Marker position={[41.50239, -73.96602]} icon={icon(7)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-7");
            },
          }}/>
        <Marker position={[41.50193, -73.96439]} icon={icon(8)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-8");
            },
          }}/>
        <Marker position={[41.50269, -73.96314]} icon={icon(9)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-9");
            },
          }}/>
        <Marker position={[41.50166, -73.9611]} icon={icon(10)}
          eventHandlers={{
            click: (e) => {
              return navigate("/hub-10");
            },
          }}/>
        <LocationMarker/>
      </MapContainer>
    </div>
  );
}

export { Map };
