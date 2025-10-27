import React from "react";
import { notFound } from "next/navigation";
import client from "@/lib/apollo-client";
import { GET_SERVICE_BY_SLUG, GET_SERVICES } from "@/lib/queries/gql-query";
import { GetServiceBySlugQuery, ServicesTypes, Service } from "@/lib/gql-types";
import Banner from "@/components/SearchDetail/banner";
import ServiceAbout from "@/components/SearchDetail/serviceAbout";
import TabsSlider from "@/components/SearchDetail/tabsSlider";

interface ServicePageProps {
  params: { slug: string };
}

export default async function ServicePage({ params }: ServicePageProps) {
  // ✅ Fetch current service
  const { data: singleServiceData } = await client.query<GetServiceBySlugQuery>({
    query: GET_SERVICE_BY_SLUG,
    variables: { slug: params.slug },
    fetchPolicy: "no-cache",
  });

  // ✅ Fetch all services
  const { data: allServicesData } = await client.query<ServicesTypes>({
    query: GET_SERVICES,
    fetchPolicy: "no-cache",
  });

  const service = singleServiceData?.service;
  const allServices = allServicesData?.services?.nodes || [];

  // ✅ If service not found → 404
  if (!service) return notFound();

  return (
    <main>
      <Banner />
      <TabsSlider data={allServices} activeService={service} />
      <ServiceAbout data={service} />
    </main>
  );
}
