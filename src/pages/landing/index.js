import Achievements from "./Achievements";
import Locations from "./Locations";
import Overlay from "../Overlay";
import StatBlock from "./StatBlock";
import Features from "./features";
import Hero from "./hero";
import Sponsors from "./sponsors";
import Testimonials from "./testimonials";

export default function Landing() {
  return (
    <>
      <Overlay />
      <Hero />
      <Sponsors />
      <Features />
      <Locations />
      <Achievements />
      <StatBlock />
      <Testimonials />
    </>
  );
}
