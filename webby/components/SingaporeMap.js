import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

// Fix default icon issue for leaflet in React
function fixLeafletIcon() {
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })
}

export default function SingaporeMap() {
  useEffect(() => {
    fixLeafletIcon()
  }, [])

  return (
    <div className="fixed right-4 top-28 z-40 w-64 h-64 rounded-lg shadow-lg overflow-hidden border border-gray-300 bg-white dark:bg-gray-800">
      <MapContainer center={[1.3521, 103.8198]} zoom={12} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[1.3521, 103.8198]}>
          <Popup>
            I am here! <br /> Singapore
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
} 