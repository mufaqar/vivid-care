"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

// ✅ Updated sample GeoJSON for 6 UK regions (simplified rectangular polygons)
const sampleGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { id: "manchester", name: "Manchester", value: 80 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-2.35, 53.55],
            [-2.15, 53.55],
            [-2.15, 53.4],
            [-2.35, 53.4],
            [-2.35, 53.55],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { id: "warrington", name: "Warrington", value: 50 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-2.65, 53.45],
            [-2.45, 53.45],
            [-2.45, 53.3],
            [-2.65, 53.3],
            [-2.65, 53.45],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { id: "warwickshire", name: "Warwickshire", value: 100 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-1.7, 52.45],
            [-1.3, 52.45],
            [-1.3, 52.1],
            [-1.7, 52.1],
            [-1.7, 52.45],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { id: "birmingham", name: "Birmingham", value: 90 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-1.98, 52.55],
            [-1.75, 52.55],
            [-1.75, 52.35],
            [-1.98, 52.35],
            [-1.98, 52.55],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { id: "london", name: "London", value: 120 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.3, 51.6],
            [0.1, 51.6],
            [0.1, 51.4],
            [-0.3, 51.4],
            [-0.3, 51.6],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { id: "oxfordshire", name: "Oxfordshire", value: 70 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-1.4, 51.9],
            [-1.0, 51.9],
            [-1.0, 51.6],
            [-1.4, 51.6],
            [-1.4, 51.9],
          ],
        ],
      },
    },
  ],
};



// ✅ Updated sample cities list with zipcodes (matching above regions)
const sampleCities = [
  {
    id: "waterhouse",
    name: "Water House",
    content: "Home Care Services, Whatever Your Family Needs, We're Here To Help",
    image: "/images/service1.png",
    regionId: "manchester",
    zipcodes: ["M1", "M2", "M3", "M4"],
  },
  {
    id: "salfordhouse",
    name: "Salford House",
    content: "Home Care Services, Whatever Your Family Needs, We're Here To Help",
    image: "/images/service2.png",
    regionId: "warrington",
    zipcodes: ["WA1", "WA2", "WA3"],
  },
  {
    id: "bridgeway",
    name: "Bridgeway",
    content: "Home Care Services, Whatever Your Family Needs, We're Here To Help",
    image: "/images/service3.png",
    regionId: "warwickshire",
    zipcodes: ["CV31", "CV32", "CV33"],
  },
  {
    id: "princess",
    name: "Princess",
    content: "Reliable and friendly home care for families in Birmingham.",
    image: "/images/service4.png",
    regionId: "birmingham",
    zipcodes: ["B1", "B2", "B3", "B4"],
  },
  {
    id: "normanhouse",
    name: "Norman House",
    content: "Comprehensive care support across London and surrounding areas.",
    image: "/images/service5.png",
    regionId: "london",
    zipcodes: ["E1", "E2", "E3", "E4"],
  },
  {
    id: "limekinhouse",
    name: "Limekin House",
    content: "Personalised care services for Oxfordshire residents.",
    image: "/images/service6.png",
    regionId: "oxfordshire",
    zipcodes: ["OX1", "OX2", "OX3", "OX4"],
  },
];


export default function InteractiveMapExample() {
  const mapRef = useRef<any>(null);
  const [leafletReady, setLeafletReady] = useState(false);
  const LRef = useRef<any>(null);
  const geoLayerRef = useRef<any>(null);
  const layerIndex = useRef<Map<string, any>>(new Map());
  const [highlighted, setHighlighted] = useState<string | null>(null);

  // ✅ Read query params from URL
  const searchParams = useSearchParams();
  const postcode = searchParams.get("postcode") || "";

  const getColor = (v: number) =>
    v > 90 ? "#08519c" : v > 60 ? "#3182bd" : v > 30 ? "#6baed6" : "#bdd7e7";

  const style = (feature: any) => ({
    fillColor: getColor(feature.properties.value || 1),
    weight: 1.5,
    opacity: 1,
    color: "#fff",
    dashArray: "3",
    fillOpacity: 0.7,
  });

  const highlightStyle = { weight: 3, color: "#08306b", fillOpacity: 0.9 };

  // Load Leaflet dynamically
  useEffect(() => {
    (async () => {
      const L = await import("leaflet");
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
      zoom: 6,
      zoomControl: true,
    });
    mapRef.current = map;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
    }).addTo(map);

    const onEachFeature = (feature: any, layer: any) => {
      const id = feature.properties.id;
      layerIndex.current.set(id, layer);
      layer.on({
        mouseover: () => applyHighlight(id),
        mouseout: () => applyHighlight(null),
        click: () => {
          const bounds = layer.getBounds?.();
          if (bounds) map.fitBounds(bounds, { padding: [20, 20], maxzoom: 3 });
        },
      });
    };

    const geoLayer = L.geoJSON(sampleGeoJSON as any, {
      style,
      onEachFeature,
    }).addTo(map);

    geoLayerRef.current = geoLayer;
    map.fitBounds(geoLayer.getBounds(), { padding: [30, 30] });
  }, [leafletReady]);

  // ✅ Highlight handler
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
  const map = mapRef.current;
  const layer = layerIndex.current.get(regionId);
  const bounds = layer?.getBounds?.();

  if (map && bounds) {
    map.flyToBounds(bounds, { padding: [20, 20] });
    setTimeout(() => {
      map.setZoom(map.getZoom() - 1);
    }, 700);
  }
};

  // ✅ Automatically highlight from postcode param
  useEffect(() => {
    if (!postcode) return;
    const normalized = postcode.trim().toUpperCase();

    const matchedCity = sampleCities.find((c) =>
      c.zipcodes.some((z) => normalized.startsWith(z))
    );

    if (matchedCity) {
      applyHighlight(matchedCity.regionId);
      handleClick(matchedCity.regionId);
    } else {
      applyHighlight(null);
    }
  }, [postcode, leafletReady]);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 mb-14">
        {/* Left: Cities List */}
        <div className="md:w-1/2 w-full space-y-4">
          <h2 className="md:text-5xl text-3xl font-semibold text-title ">
            Delivering Quality Care in Your Area
          </h2>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:items-end items-center justify-center">
          <Link href="#" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit'>
            Enquire Now <FaArrowRightLong />
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
        {/* Left: Cities List */}
        <div className="md:w-1/2 w-full space-y-4">
          {sampleCities.map((city) => (
            <button
              key={city.id}
              onMouseEnter={() => handleHover(city.regionId)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(city.regionId)}
              className={`flex md:flex-row flex-row items-center gap-3 bg-white py-2 px-5 rounded-[10px] w-full border shadow-[10px_10px_60px_0_rgba(0,0,0,0.04)]
               ${highlighted === city.regionId
                  ? "border-primary"
                  : "border-[#ECF1FF]"
                }`}>
              <div className="w-1/6">
                <Image src={city?.image} alt={city?.image} width={90} height={60} className="w-full rounded-lg" />
              </div>
              <div className="w-5/6">
                <h3 className="md:text-2xl text-xl font-semibold text-title text-left mb-2">{city.name}</h3>
                <p className="md:text-lg text-sm font-normal text-desc text-left">{city.content}</p>
              </div>
            </button>
          ))}
        </div>
        {/* Right: Map */}
        <div className="md:w-1/2 w-full rounded-[20px] overflow-hidden">
          <div ref={mapRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
