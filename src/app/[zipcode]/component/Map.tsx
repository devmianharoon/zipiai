"use client";
// MapComponent.jsx
import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet marker icons (React doesn't handle default paths well)
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const { BaseLayer, Overlay } = LayersControl;

const MapComponent = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      className="h-[50vh] rounded-md">
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </BaseLayer>

        <BaseLayer name="OpenStreetMap.HOT">
          <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        </BaseLayer>

        <BaseLayer name="OpenTopoMap">
          <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
        </BaseLayer>

        <Overlay checked name="Cities">
          <Marker position={[51.505, -0.09]}>
            <Popup>London City Center</Popup>
          </Marker>
        </Overlay>

        <Overlay name="Parks">
          <Marker position={[51.51, -0.1]}>
            <Popup>Hyde Park</Popup>
          </Marker>
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;
