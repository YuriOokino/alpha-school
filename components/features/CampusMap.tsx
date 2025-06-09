import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon (blue)
const markerIcon: Icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const campuses: { name: string; position: LatLngExpression }[] = [
  { name: "Alpha Austin (PK-8)", position: [30.2672, -97.7431] },
  { name: "Alpha High School | Austin", position: [30.2672, -97.7431] },
  { name: "Alpha Miami (K-8)", position: [25.7617, -80.1918] },
  { name: "Alpha Brownsville (K-8)", position: [25.9017, -97.4975] },
  { name: "Alpha Houston (K-8)", position: [29.7604, -95.3698] },
  { name: "Alpha Orlando (K-8)", position: [28.5383, -81.3792] },
  { name: "Alpha Phoenix (K-8)", position: [33.4484, -112.0740] },
  { name: "Alpha Santa Barbara (K-8)", position: [34.4208, -119.6982] },
  { name: "Alpha Tampa (K-8)", position: [27.9506, -82.4572] },
  { name: "Alpha West Palm Beach (K-8)", position: [26.7153, -80.0534] },
  { name: "Alpha New York (K-8)", position: [40.7128, -74.0060] },
  { name: "Alpha Fort Worth (K-8)", position: [32.7555, -97.3308] },
];

export default function CampusMap() {
  return (
    <MapContainer center={[29.7604, -95.3698]} zoom={4} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {campuses.map((campus, idx) => (
        <Marker key={idx} position={campus.position} icon={markerIcon}>
          <Popup>{campus.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 