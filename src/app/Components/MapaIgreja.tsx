// Mapa da Igreja
export default function MapaIgreja() {
  return (
    <section className="bg-gray-200 py-10 lg:py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        

        <div className="w-full h-[430px] md:h-[520px] rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps?q=EMBAIXADA+DO+REINO+DE+CRISTO+ANGOLA&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
