import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LiveMonitoring = ({ driverLocation, riderLocation }) => {
  const [currentDriverLocation, setCurrentDriverLocation] = useState(driverLocation);
  const [currentRiderLocation, setCurrentRiderLocation] = useState(riderLocation);

  useEffect(() => {
    // Simulate real-time location updates
    const interval = setInterval(() => {
      setCurrentDriverLocation({
        lat: currentDriverLocation.lat + 0.001,
        lng: currentDriverLocation.lng + 0.001,
      });
      setCurrentRiderLocation({
        lat: currentRiderLocation.lat + 0.001,
        lng: currentRiderLocation.lng + 0.001,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentDriverLocation, currentRiderLocation]);

  return (
    <MapContainer center={currentDriverLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={currentDriverLocation}>
        <Popup>Driver Location</Popup>
      </Marker>
      <Marker position={currentRiderLocation}>
        <Popup>Rider Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LiveMonitoring;