import { Health, TickCircle } from "iconsax-react";

const FEATURES = [
  {
    label: "Power your workout",
    title: "Fuel your greatness with every bite — Eat Like A Pro!",
    desc: "Kickstart your healthy eating journey with Protein Box",
    img: "/images/features/01.png",
    mobileImg: "/images/features/01.png",
    fullWidthImg: "/images/features/pb-boxes.png",
  },
  {
    label: "They trust us",
    title: "National Atheletes, Sportspersons & Bodybuilders trust us",
    desc: "Protein Box is your one stop shop for healthy eating",
    slideshow: true,
    offerings: [
      {
        icon: <TickCircle />,
        title1: "super",
        title2: "clean",
        gradient: "91deg, #F4DC0B 18.41%, #8C843D 99%",
        desc: "Quality protein sourced from trusted pristine facilities",
      },
      {
        icon: <TickCircle />,
        title1: "structured",
        title2: "diets",
        gradient: "91deg, #FFF 18.41%, #A0A0A0 61.56%, #FFF 99%",
        desc: "Balanced proteins tailored to your dietary needs",
      },
      {
        icon: <TickCircle />,
        title1: "delivered",
        title2: "home",
        gradient: "91deg, #F40BEA 18.41%, #CCB80A 99%",
        desc: "Convenient, pre-cooked protein meals at your doorstep",
      },
    ],
  },
  // {
  //   label: "Widely available",
  //   title: "Find us on Swiggy and Zomato or order directly from us",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  //   img: "/images/features/03.png",
  //   mobileImg: "/images/features/03-mobile.png",
  // },
];

export default FEATURES;
