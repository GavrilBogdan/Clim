import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="relative w-full px-2  sm:px-6 py-32 flex justify-center overflow-hidden">
      <div className="absolute w-[40rem] h-[40rem]  rounded-full -z-10" />

      <div className="max-w-3xl w-full text-center bg-white/40 backdrop-blur-3xl shadow-lg shadow-blue-500/30 border border-white/60 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-2xl sm:text-5xl font-bold text-blue-900 mb-6 text-center">
          Ești gata să instalezi aerul condiționat fără stres?
        </h2>

        <p className="text-blue-900/70 text-lg mb-10">
          Primești consultanță gratuită, preț corect și montaj garantat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/form"
            className=" px-4 py-2 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white font-bold shadow-xl hover:scale-105 transition-all"
          >
            Cere ofertă gratuită
          </Link>

          <a
            href="tel:0700000000"
            className="px-3 py-2 sm:px-10 sm:py-4 rounded-full border-2 border-blue-600 text-blue-700 font-bold hover:bg-white transition"
          >
            Sună acum
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
