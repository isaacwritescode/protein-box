import { EmailOutlined, LinkedIn, Twitter } from "@mui/icons-material";
import { Instagram } from "iconsax-react";

export const FOOTER_LINKS = [
  {
    title: "How it works",
    path: "/how-it-works",
  },
  {
    title: "Subscriptions",
    path: "/subscriptions",
  },
  {
    title: "contact",
    path: "/contact",
  },
  {
    title: "About us",
    path: "/about-us",
  },
];

export const SOCIAL_LINKS = [
  {
    platform: "linkedIn",
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/company/flexibus-in/",
  },
  {
    platform: "instagram",
    icon: <Instagram />,
    url: "https://instagram.com/flexibus.in",
  },
  {
    platform: "Twitter",
    icon: <Twitter />,
    url: "https://twitter.com",
  },
  {
    platform: "Email",
    icon: <EmailOutlined />,
    url: "mailto:flexibus.in@gmail.com",
  },
];
