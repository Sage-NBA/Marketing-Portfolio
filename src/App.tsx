import {
  Navbar,
  Hero,
  SerpSimulator,
  Services,
  Strategy,
  Faq,
  AuditForm,
  ContactCta,
  Footer,
} from "./Components";

export function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-lime-400 selection:text-black antialiased">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <SerpSimulator />
        <Services />
        <Strategy />
        <Faq />
        <AuditForm />
        <ContactCta />
      </main>

      {/* Crawlable Footer */}
      <Footer />
    </div>
  );
}

export default App;
