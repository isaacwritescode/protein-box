import FAQ from "../landing/FAQ";
import Bestsellers from "./Bestsellers";
import OrderBlock from "./OrderBlock";
import Stepline from "./Steps";

export default function HowItWorks() {
  return <>
    <Stepline />
    <Bestsellers />
    <OrderBlock />
    <FAQ />
  </>
}