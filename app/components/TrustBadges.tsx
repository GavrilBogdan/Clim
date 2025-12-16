import { ShieldCheck, Clock, Star, Wrench } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="w-full flex justify-center px-3 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl">
        <Badge icon={<ShieldCheck />} text="Garanție 24–36 luni" />
        <Badge icon={<Clock />} text="Răspuns în 24h" />
        <Badge icon={<Star />} text="Clienți verificați" />
        <Badge icon={<Wrench />} text="Tehnicieni autorizați" />
      </div>
    </section>
  );
};

export default TrustBadges;

const Badge = ({ icon, text }: any) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/40 backdrop-blur-xl border border-blue-200/40 shadow-sm cursor-pointer hover:scale-105 transition-all duration-150 hover:shadow-xs hover:shadow-blue-700">
    <div className="p-2 bg-blue-600/10 rounded-xl text-blue-700">{icon}</div>
    <span className="font-semibold text-blue-900 text-sm">{text}</span>
  </div>
);
