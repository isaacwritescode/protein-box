import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "../Link";
import { NavlinkGroup } from "./NavlinkGroup";

const Navbar = ({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return <Box
    boxSizing="border-box"
    width={{ xs: "100%", md: "90%" }}
    mx="auto" pl={4} pr={1.5} py={1.5} maxWidth={1400} borderRadius={100} sx={{
      position: "fixed",
      top: "24px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 99,
      boxShadow: userHasScrolled && "0 0 50px rgb(0, 0, 0, 0.7)",
      "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
      {
        bgcolor: userHasScrolled && "rgb(0, 0, 0, 0.7)",
        backdropFilter: userHasScrolled && "blur(4em)",
      },
    }}>
    <Stack justifyContent="space-between" alignItems="center" direction="row">
      <Link path="/" component={
        <img src="/images/logo.png" height={48} alt="alto" />
      } />
      {md && <NavlinkGroup />}
      <Link
        path="/contact"
        component={
          <Button color="primary" size="small" variant="outlined">Contact us</Button>
        }
      />
      {/* {md || (
        <IconButton sx={{ color: "white.main" }} onClick={() => setIsMenuVisible(!isMenuVisible)}>
          {isMenuVisible ? <CloseOutlined /> : <Menu />}
        </IconButton>
      )} */}
    </Stack>
  </Box >
}

export default Navbar;