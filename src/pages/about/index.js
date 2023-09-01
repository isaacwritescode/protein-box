import Footer from "../../components/Footer";
import StatBlock from "../landing/StatBlock";
import EventsCollage from "./EventsCollage";
import HealthyCorner from "./HealthyCorner";
import HostEvent from "./HostEvent";
import Main from "./Main";

export default function About() {
  return <>
    <Main />
    <StatBlock />
    <HealthyCorner />
    <EventsCollage />
    <HostEvent />
    <Footer />
  </>
}