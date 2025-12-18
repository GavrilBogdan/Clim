import Navbar from "../components/Navbar";

export default function GDPR() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 py-24">
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

      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-3xl border border-blue-200/40 rounded-3xl p-8 sm:p-14 text-blue-950 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
        <h1 className="text-3xl sm:text-5xl font-black font-inter tracking-tight mb-10 text-center">
          Politică de Confidențialitate
        </h1>

        <div className="space-y-8 font-mont leading-relaxed text-lg">
          <p>
            Protecția datelor dumneavoastră cu caracter personal este o
            prioritate pentru <strong>ClimInstall</strong>. Această politică
            explică ce date colectăm, de ce le colectăm și cum sunt utilizate.
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-3">1. Ce date colectăm</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Nume și prenume</li>
              <li>Număr de telefon</li>
              <li>Adresă de email</li>
              <li>Localitate</li>
              <li>Date transmise voluntar prin formularele de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Scopul colectării</h2>
            <p>Datele sunt colectate exclusiv pentru:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>contactarea clienților</li>
              <li>oferirea de informații și oferte personalizate</li>
              <li>programarea serviciilor solicitate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Temeiul legal</h2>
            <p>
              Prelucrarea datelor se face în baza consimțământului exprimat
              explicit de utilizator prin completarea formularelor de pe site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Stocarea datelor</h2>
            <p>
              Datele sunt stocate în siguranță și nu sunt transmise către terți,
              cu excepția serviciilor necesare funcționării site-ului (ex:
              servicii de email).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              5. Drepturile utilizatorului
            </h2>
            <p>
              Conform Regulamentului (UE) 2016/679 (GDPR), aveți următoarele
              drepturi:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>dreptul de acces la date</li>
              <li>dreptul de rectificare</li>
              <li>dreptul de ștergere („dreptul de a fi uitat”)</li>
              <li>dreptul de restricționare a prelucrării</li>
              <li>dreptul de opoziție</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Contact</h2>
            <p>
              Pentru orice solicitare legată de datele personale, ne puteți
              contacta la:
            </p>
            <p className="mt-2 font-semibold">Email: contact@climinstall.ro</p>
          </section>

          <p className="text-sm text-blue-900/60 pt-8 border-t border-blue-200">
            Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
          </p>
        </div>
      </div>
    </section>
  );
}
