import Achievements from "./Achievements";
import Locations from "./Locations";
import Overlay from "../Overlay";
import StatBlock from "./StatBlock";
import Features from "./features";
import Hero from "./hero";
import Sponsors from "./sponsors";
import Testimonials from "./testimonials";
import Offerings from "./Offerings";
import Video from "./Video";

export default function Landing() {
  return (
    <>
      <Overlay />
      <Hero />
      <Sponsors />
      <Features />
      <Offerings />
      <Locations />
      {/* <Video /> */}
      <Achievements />
      <StatBlock />
      <Testimonials />
    </>
  );
}
