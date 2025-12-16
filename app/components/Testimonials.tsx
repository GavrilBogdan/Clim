import React from "react";
import Cta from "./Cta";

const Testimonials = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 py-32 select-none">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "150px 150px",
        }}
      />

      <div className="mb-16 text-center space-y-4">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
          Recenzii
        </span>
        <h2 className="font-inter font-black text-3xl sm:text-5xl text-blue-900">
          Părerea clienților noștri
        </h2>
        <p className="text-blue-900/60 max-w-xl mx-auto">
          Clienții noștri ne recomandă pentru profesionalism, rapiditate și
          montaj curat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        <TestimonialCard
          text="Montaj rapid și foarte curat. Echipa a fost punctuală și profesionistă. Recomand cu încredere!"
          name="Andrei Popescu"
          location="Timișoara"
        />

        <TestimonialCard
          text="Consultanță excelentă, mi-au explicat tot înainte de montaj. Foarte serioși."
          name="Maria Ionescu"
          location="Dumbrăvița"
        />

        <TestimonialCard
          text="Preț corect, lucrare făcută impecabil. Cu siguranță voi apela din nou."
          name="Carlos A."
          location="Giroc"
        />
      </div>
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-blue-500/60 blur-2xl rounded-full absolute -left-10 bottom-40 -z-30"></span>
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-blue-500/60 blur-2xl rounded-full absolute -right-10 top-10"></span>
      <Cta />
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({
  text,
  name,
  location,
}: {
  text: string;
  name: string;
  location: string;
}) => {
  return (
    <div className="h-full flex flex-col rounded-3xl bg-white/40 backdrop-blur-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 p-8 cursor-pointer">
      <div className="mb-6 text-yellow-400 text-lg">★★★★★</div>

      <p className="text-blue-900/80 leading-relaxed font-medium flex-grow">
        “{text}”
      </p>

      <div className="my-6 h-px w-full bg-blue-200" />

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-blue-900">{name}</p>
          <p className="text-sm text-blue-900/60">{location}</p>
        </div>
      </div>
    </div>
  );
};
