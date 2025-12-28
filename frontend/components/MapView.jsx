import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapView() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [30.06, -1.94], // Example: Rwanda region
      zoom: 8,
    });

    map.on("load", () => {
      map.addSource("carbon", {
        type: "geojson",
        data: "/carbon_data.geojson",
      });

      map.addLayer({
        id: "carbon-layer",
        type: "fill",
        source: "carbon",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "carbon_score"],
            0, "#ff0000",
            50, "#ffff00",
            100, "#00ff00"
          ],
          "fill-opacity": 0.6
        }
      });
    });
  }, []);

  return <div ref={mapContainer} style={{ height: "500px" }} />;
}
