"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Set default Leaflet icons
delete (L.Icon.Default.prototype as Partial<{ _getIconUrl?: () => string }>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Types
interface Store {
  name: string;
  address: string;
  cityName: string;
  stateName: string;
  stateAbbr: string;
  zip: string;
  lat: number;
  lon: number;
  phone: string;
}

interface Provider {
  providerID: number;
  providerName: string;
  providerCoverage: number;
  stores: Store[];
}

interface RootState {
  chat: {
    data: {
      providers: { ProviderName: string }[];
    };
    loading: boolean;
    error: string | null;
  };
}

const ChangeMapCenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.setView(center, 12);
  return null;
};

interface MapComponentProps {
  zipcode: string;
}

const MapComponent = ({ zipcode }: MapComponentProps) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProviderId, setSelectedProviderId] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([40.7128, -74.006]); // Default to NYC

  // Get provider names from Redux
  const { data } = useSelector((state: RootState) => state.chat);
  const reduxProviderNames = data?.providers?.map((p) => p.ProviderName) || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://app.demo2.asdev.tech/local_map/zip_code/${zipcode}`);
        const fetchedProviders: Provider[] = await response.json();

        // Filter providers based on Redux provider names
        const filteredProviders = fetchedProviders.filter((provider) =>
          reduxProviderNames.includes(provider.providerName)
        );

        setProviders(filteredProviders);

        if (filteredProviders.length > 0) {
          // ✅ Only set default if current selection is invalid
          if (
            !selectedProviderId ||
            !filteredProviders.some((p) => p.providerID === selectedProviderId)
          ) {
            const defaultProvider = filteredProviders[0];
            setSelectedProviderId(defaultProvider.providerID);
            const firstStore = defaultProvider.stores[0];
            if (firstStore?.lat && firstStore?.lon) {
              setMapCenter([firstStore.lat, firstStore.lon]);
            }
          }
        } else {
          setSelectedProviderId(null);
          setMapCenter([40.7128, -74.006]);
        }
      } catch (error) {
        console.error("Failed to fetch provider data:", error);
      }
    };

    fetchData();
  }, [zipcode, reduxProviderNames]);

  // ✅ Update map center on manual provider change
  useEffect(() => {
    const provider = providers.find((p) => p.providerID === selectedProviderId);
    const firstStore = provider?.stores[0];
    if (firstStore?.lat && firstStore?.lon) {
      setMapCenter([firstStore.lat, firstStore.lon]);
    }
  }, [selectedProviderId]);

  const selectedProvider = providers.find((p) => p.providerID === selectedProviderId);

  return (
    <div>
      {providers.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Internet Coverage Map</h2>
            <select
              onChange={(e) => setSelectedProviderId(Number(e.target.value))}
              value={selectedProviderId ?? ""}
              className="p-2 border border-gray-300 rounded"
            >
              {providers.map((provider) => (
                <option key={provider.providerID} value={provider.providerID}>
                  {provider.providerName}
                </option>
              ))}
            </select>
          </div>
  
          <MapContainer center={mapCenter} zoom={12} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
  
            {selectedProvider?.stores.map((store, index) => (
              <Marker key={index} position={[store.lat, store.lon]}>
                <Popup>
                  <strong>{store.name}</strong>
                  <br />
                  {store.address}, {store.cityName}, {store.stateAbbr} {store.zip}
                  <br />
                  📞 {store.phone}
                </Popup>
              </Marker>
            ))}
  
            <ChangeMapCenter center={mapCenter} />
          </MapContainer>
        </>
      ) : (
        <div>No matching providers found for this zip code.</div>
      )}
    </div>
  );
};

export default MapComponent;
