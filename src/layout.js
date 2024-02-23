import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
// import { Menu } from "./common/Menu";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default function Layout({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) {
  const { pathname } = useLocation();
  return (
    <>
      <News />
      <Navbar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        userHasScrolled={userHasScrolled}
      />
      {isMenuVisible && <Menu setIsMenuVisible={setIsMenuVisible} />}
      <Box pt={pathname === "/" ? 0 : 8}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
