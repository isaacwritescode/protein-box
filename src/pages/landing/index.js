import Achievements from "./Achievements";
import Locations from "./Locations";
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
    <Locations />
    <Achievements />
    <StatBlock />
    <Testimonials />
  </>
}