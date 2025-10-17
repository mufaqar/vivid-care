import React from "react";
import { notFound } from "next/navigation";
import { services } from "@/data/servicesData";
import Banner from "@/components/SearchDetail/banner";
import ServiceAbout from "@/components/SearchDetail/serviceAbout";
import TabsSlider from "@/components/SearchDetail/tabsSlider";

interface ServicePageProps {
  params: { slug: string };
}

const ServicePage = ({ params }: ServicePageProps) => {
  // Find the active service by slug
  const activeService = services.find((s) => s.slug === params.slug);
  if (!activeService) return notFound();

  // Generate tabs from ALL services
  const serviceTabs = services.map((srv) => ({
    title: srv.title,
    content: (
      <div className="space-y-4">
        <p className="text-lg text-desc">{srv.description}</p>
        <img
          src={srv.image}
          alt={srv.title}
          className="rounded-lg w-full h-[400px] object-cover"
        />
      </div>
    ),
  }));

  return (
    <main>
      <Banner
        
      />
      {/* Pass all services as tabs + currently active title */}
      <TabsSlider data={serviceTabs} activeServiceTitle={activeService.title} />
      <ServiceAbout  />
    </main>
  );
};

export default ServicePage;
