"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { services } from "@/data/servicesData";
import Image from "next/image";

// 🧠 Dynamically import only client-side
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import("react-leaflet").then(mod => mod.GeoJSON),
  { ssr: false }
);

export default function PopulationMap() {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("https://leafletjs.com/examples/choropleth/us-states.js")
      .then(res => res.text())
      .then(script => {
        const jsonStr = script
          .replace("var statesData =", "")
          .replace(/;$/, "");
        setGeoData(JSON.parse(jsonStr));
      });
  }, []);

  const getColor = (d: number) =>
    d > 1000 ? "#800026" :
      d > 500 ? "#BD0026" :
        d > 200 ? "#E31A1C" :
          d > 100 ? "#FC4E2A" :
            d > 50 ? "#FD8D3C" :
              d > 20 ? "#FEB24C" :
                d > 10 ? "#FED976" : "#FFEDA0";

  const style = (feature: any) => ({
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  });

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:items-center justify-between gap-10 md:mb-16 mb-8">
        <h2 className="md:text-5xl text-3xl font-semibold text-title max-w-[506px]">
          Delivering Quality Care in Your Area
        </h2>
        <Link
          href="#"
          className="bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit"
        >
          Enquire Now <FaArrowRightLong />
        </Link>
      </div>

      <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col items-center justify-between gap-10">
        {/* Sidebar */}
        <div className="md:w-2/5 w-full space-y-4">
          {services.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-1/4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={128}
                  height={112}
                  className="w-full"
                />
              </div>
              <div className="w-3/4">
                <h3 className="md:text-2xl text-xl font-semibold text-title md:mb-3.5 mb-2">
                  {item.title}
                </h3>
                <p className="md:text-lg text-sm font-normal text-desc">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="w-3/5">
          {geoData && (
            <MapContainer
              center={[37.8, -96]}
              zoom={4}
              scrollWheelZoom={false}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON data={geoData} style={style} />
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
}
