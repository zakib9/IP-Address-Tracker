import { useEffect } from "react";
import L from "leaflet";

function Map({ lat, lng }) {
  useEffect(() => {
    // Create map only once
    const map = L.map("map").setView([lat, lng], 13);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    // Add marker
    const marker = L.marker([lat, lng]).addTo(map);

    // When lat/lng changes → move map + marker
    map.setView([lat, lng], 13);
    marker.setLatLng([lat, lng]);

    // Cleanup
    return () => {
      map.remove();
    };
  }, [lat, lng]);

  return <div id="map" className="w-full min-h-screen z-10"></div>;
}

export default Map;
