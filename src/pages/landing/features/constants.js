import { Health } from "iconsax-react";

const FEATURES = [
  {
    label: "Widely available",
    title: "Find us on Swiggy and Zomato or order directly from us",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    img: "/images/features/03.png",
    mobileImg: "/images/features/03-mobile.png"
  },
  {
    label: "Wide variety",
    title: "Our menu is designed to meet all your protein goals, tastefully",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    img: "/images/features/02.png",
    mobileImg: "/images/features/02-mobile.png",
    offerings: [
      {
        icon: <Health />,
        title: "Clean & Safe",
        desc: "Lorem ipsum dolor sit amet, consectetur"
      },
      {
        icon: <Health />,
        title: "Structured diets",
        desc: "Lorem ipsum dolor sit amet, consectetur"
      },
      {
        icon: <Health />,
        title: "Monthly Subscriptions",
        desc: "Lorem ipsum dolor sit amet, consectetur"
      },
    ]
  },
  {
    label: "Widely available",
    title: "Find us on Swiggy and Zomato or order directly from us",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    img: "/images/features/03.png",
    mobileImg: "/images/features/03-mobile.png"
  },
]

export default FEATURES;