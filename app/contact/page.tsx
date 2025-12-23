import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Headphones, Lightbulb, Calendar, Phone, Mail } from "lucide-react";

const page = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 py-24 select-none">
      <Navbar />
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
      <div className="w-full p-2 sm:p-8 flex justify-center flex-col items-center">
        <div className="flex flex-col  sm:flex-col md:flex-col lg:flex-row w-full justify-center">
          <div className=" bg-white/20 backdrop-blur-3xl rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl p-6 sm:p-10 flex flex-col gap-10 flex-2/3">
            <div>
              <h1 className="font-inter font-black text-2xl sm:text-4xl tracking-tight text-green-700">
                Contacteaza-ne
              </h1>
              <div className="border-6 w-[60%] rounded-full border-green-300 mt-2"></div>
              <div className="mt-6 font-semibold font-mont text-green-950 tracking-tight">
                <p>
                  Trimite-ne un email sau suna pentru a discuta despre nevoile
                  dumneavoastra!
                </p>
                <div className="mt-4 font-light font-mont text-lg flex flex-col gap-2">
                  <p className="flex flex-row gap-3 items-center">
                    <Mail />
                    greenclim15@yahoo.com
                  </p>
                  <a
                    className="flex flex-row gap-3 items-center"
                    href="tel:0735699820"
                  >
                    <Phone className="text-md " />
                    0735 699 820
                  </a>
                  <Link
                    href="/form"
                    className="underline font-semibold cursor-pointer font-inter hover:text-green-500"
                  >
                    Cere Ofertă
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-col sm:flex-row flex gap-5">
              <div className="flex gap-3 flex-col p-4 bg-white/40 rounded-3xl flex-1 hover:shadow-[0_8px_25px_rgba(30,255,30,0.2)] cursor-pointer hover:scale-[1.015] transition-all duration-300">
                <h1 className="font-semibold text-lg flex flex-row gap-2 items-center">
                  <Headphones />
                  Asistenta
                </h1>
                <p>
                  Suntem la dispozitia dumneavoastra pentru orice intrebari sau
                  nelamuriri puteti avea legate de serviciile noastre.
                </p>
              </div>
              <div className="flex gap-3 flex-col p-4 bg-white/40 rounded-3xl flex-1 hover:shadow-[0_8px_25px_rgba(30,255,30,0.2)] cursor-pointer hover:scale-[1.015] transition-all duration-300">
                <h1 className="font-semibold text-lg flex flex-row gap-2 items-center">
                  <Lightbulb />
                  Consultanta
                </h1>
                <p>
                  Oferim consultanta gratuita pentru a va ajuta sa alegeti cel
                  mai bun aparat de aer conditionat pentru locuinta
                  dumneavoastra.
                </p>
              </div>
              <div className="flex gap-3 flex-col p-4 bg-white/40 rounded-3xl flex-1 hover:shadow-[0_8px_25px_rgba(30,255,30,0.2)] cursor-pointer hover:scale-[1.015] transition-all duration-300">
                <h1 className="font-semibold text-lg flex flex-row gap-2 items-center">
                  <Calendar />
                  Programare
                </h1>
                <p>
                  In urma unei decizii putem stabilii data in care doriti sa
                  efectuam montajul.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/90 gap-10 backdrop-blur-3xl rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl lg:rounded-br-3xl p-10 flex flex-col justify-center items-center">
            <div>
              <h1 className="font-mont font-light text-xl">
                Aria de acoperire a serviciilor noastre
              </h1>
            </div>
            <div className="w-full flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1441460.9274367532!2d20.585933879626406!3d45.119174493484955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474fb894d74d5291%3A0x5186d4661de76a50!2sRegiunea%20Regiunea%20Vest!5e0!3m2!1sro!2sro!4v1766039031643!5m2!1sro!2sro"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-green-300/60 blur-2xl rounded-full absolute -left-10 bottom-10 -z-50"></span>
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-green-400/60 blur-2xl rounded-full absolute -right-10 top-10 -z-50"></span>
    </section>
  );
};

export default page;
