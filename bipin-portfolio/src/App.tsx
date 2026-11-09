import { MotionConfig, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import Categories from "./components/Categories";
import Services from "./components/Services";
import Process from "./components/Process";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // reducedMotion="user" makes every animation respect the visitor's OS "reduce motion" setting
    <MotionConfig reducedMotion="user">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <About />
          <FeaturedWork />
          <Categories />
          <Services />
          <Process />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </MotionConfig>
  );
}
