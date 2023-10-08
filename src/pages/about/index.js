import StatBlock from "../landing/StatBlock";
import EventsCollage from "./EventsCollage";
import HealthyCorner from "./HealthyCorner";
import HostEvent from "./HostEvent";
import Main from "./Main";
import Team from "./Team";

export default function About() {
  return <>
    <Main />
    <StatBlock />
    {/* <HealthyCorner /> */}
    <Team />
    <EventsCollage />
    <HostEvent />
  </>
}