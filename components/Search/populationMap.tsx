import InteractiveChoropleth from "./InteractiveChoropleth";

export default function ServiceAreasPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
        <div className="">
          <InteractiveChoropleth />
        </div>
      </div>
    </section>
  );
}
