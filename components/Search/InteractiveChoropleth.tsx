'use client';

import { useEffect, useRef, useState } from 'react';

// ✅ sample GeoJSON for 3 UK towns (simplified rectangles)
const sampleGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { id: 'manchester', name: 'Manchester', value: 80 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-2.35, 53.55],
          [-2.15, 53.55],
          [-2.15, 53.40],
          [-2.35, 53.40],
          [-2.35, 53.55]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { id: 'warrington', name: 'Warrington', value: 50 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-2.65, 53.45],
          [-2.45, 53.45],
          [-2.45, 53.30],
          [-2.65, 53.30],
          [-2.65, 53.45]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { id: 'warwickshire', name: 'Warwickshire', value: 100 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-1.70, 52.45],
          [-1.30, 52.45],
          [-1.30, 52.10],
          [-1.70, 52.10],
          [-1.70, 52.45]
        ]]
      }
    }
  ]
};

// ✅ sample cities list
const sampleCities = [
  { id: 'manchester', name: 'Manchester', image: '/images/service1.png', regionId: 'manchester' },
  { id: 'warrington', name: 'Warrington', image: '/images/service2.png', regionId: 'warrington' },
  { id: 'warwickshire', name: 'Warwickshire', image: '/images/service3.png', regionId: 'warwickshire' },
];

export default function InteractiveMapExample() {
  const mapRef = useRef<any>(null);
  const [leafletReady, setLeafletReady] = useState(false);
  const LRef = useRef<any>(null);
  const geoLayerRef = useRef<any>(null);
  const layerIndex = useRef<Map<string, any>>(new Map());
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const getColor = (v: number) =>
    v > 90 ? '#08519c' :
    v > 60 ? '#3182bd' :
    v > 30 ? '#6baed6' : '#bdd7e7';

  const style = (feature: any) => ({
    fillColor: getColor(feature.properties.value || 1),
    weight: 1.5,
    opacity: 1,
    color: '#fff',
    dashArray: '3',
    fillOpacity: 0.7
  });

  const highlightStyle = { weight: 3, color: '#08306b', fillOpacity: 0.9 };

  // Load Leaflet dynamically
  useEffect(() => {
    (async () => {
      const L = await import('leaflet');
      LRef.current = L;
      setLeafletReady(true);
    })();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!leafletReady || !mapRef.current) return;
    const L = LRef.current;
    const map = L.map(mapRef.current, {
      center: [53.4, -2.3],
      zoom: 8,
      zoomControl: true
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
    }).addTo(map);

    // Build GeoJSON layer
    const onEachFeature = (feature: any, layer: any) => {
      const id = feature.properties.id;
      layerIndex.current.set(id, layer);
      layer.on({
        mouseover: () => applyHighlight(id),
        mouseout: () => applyHighlight(null),
        click: () => {
          const bounds = layer.getBounds?.();
          if (bounds) map.fitBounds(bounds, { padding: [20, 20] });
        }
      });
    };

    const geoLayer = L.geoJSON(sampleGeoJSON as any, {
      style,
      onEachFeature
    }).addTo(map);

    geoLayerRef.current = geoLayer;
    map.fitBounds(geoLayer.getBounds(), { padding: [30, 30] });
  }, [leafletReady]);

  const applyHighlight = (id: string | null) => {
    const L = LRef.current;
    if (!L) return;

    if (highlighted && layerIndex.current.has(highlighted)) {
      const prev = layerIndex.current.get(highlighted);
      geoLayerRef.current.resetStyle(prev);
    }
    if (id && layerIndex.current.has(id)) {
      const layer = layerIndex.current.get(id);
      layer.setStyle(highlightStyle);
      layer.bringToFront?.();
    }
    setHighlighted(id);
  };

  const handleHover = (regionId: string) => applyHighlight(regionId);
  const handleLeave = () => applyHighlight(null);
  const handleClick = (regionId: string) => {
    const layer = layerIndex.current.get(regionId);
    const b = layer?.getBounds?.();
    b && mapRef.current && mapRef.current.fitBounds(b, { padding: [20, 20] });
  };

  return (
    <section className="py-10">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
        {/* Left: Cities List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">
            We provide our premium homecare services to the following areas
          </h2>
          {sampleCities.map((city) => (
            <button
              key={city.id}
              onMouseEnter={() => handleHover(city.regionId)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(city.regionId)}
              className="flex items-center gap-3 w-full text-left rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition"
            >
              <div className="w-16 h-12 rounded-md overflow-hidden bg-gray-100">
                <img src={city.image} alt={city.name} className="object-cover w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{city.name}</h3>
                <p className="text-sm text-gray-500">Hover or tap to highlight</p>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Map */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-200">
          <div ref={mapRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
