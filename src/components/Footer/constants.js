import { EmailOutlined, LinkedIn, Twitter } from "@mui/icons-material";
import { Facebook, Instagram, Call, Whatsapp } from "iconsax-react";

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
    title: "Contact",
    path: "/contact",
  },
  {
    title: "About us",
    path: "/about-us",
  },
];

export const SOCIAL_LINKS = [
  {
    platform: "Whatsapp",
    icon: <Whatsapp />,
    url: "https://wa.me/+918850916053/?text=Hey Protein Box! I have a query..",
  },
  {
    platform: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/proteinboxgoa",
  },
  {
    platform: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/proteinboxgoa",
  },
  {
    platform: "Email",
    icon: <EmailOutlined />,
    url: "mailto:proteinboxdietcafe@gmail.com",
  },
];
