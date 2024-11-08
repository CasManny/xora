import "./App.css";
import Download from "./sections/download";
import FAQ from "./sections/faq";
import Features from "./sections/features";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Pricing from "./sections/pricing";
import Testimonials from "./sections/testimonials";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
