import Footer from "../../components/Footer";
import FAQ from "./FAQ";
import StatBlock from "./StatBlock";
import Features from "./features";
import Hero from "./hero";
import Sponsors from "./sponsors";
import Testimonials from "./testimonials";

export default function Landing() {
  return <>
    <Hero />
    <Sponsors />
    <Features />
    <StatBlock />
    <FAQ />
    <Testimonials />
    <Footer />
  </>
}