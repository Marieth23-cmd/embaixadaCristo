// Mapa da Igreja
export default function MapaIgreja() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-full mx-auto">
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
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
