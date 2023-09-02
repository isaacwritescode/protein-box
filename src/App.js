import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import HowItWorks from "./pages/how-it-works";
import Landing from "./pages/landing";
import Subscriptions from "./pages/subscriptions";
import theme from "./theme";

function App() {
  const { pathname } = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY === 0
        ? setUserHasScrolled(false)
        : setUserHasScrolled(true);

    };
    if (isMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuVisible]);

  return <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/"
        element={
          <Layout
            isMenuVisible={isMenuVisible}
            setIsMenuVisible={setIsMenuVisible}
            userHasScrolled={userHasScrolled}
          />
        }
      >
        <Route index element={<Landing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </ThemeProvider>
}

export default App;
