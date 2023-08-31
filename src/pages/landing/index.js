import Footer from "../../components/Footer";
import StatBlock from "./StatBlock";
import Features from "./features";
import Hero from "./hero";
import Sponsors from "./sponsors";

export default function Landing(){
  return <>
  <Hero />
  <Sponsors />
  <Features />
  <StatBlock />
  <Footer />
  </>
}