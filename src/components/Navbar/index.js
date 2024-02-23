import { CloseOutlined, Menu } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "../Link";
import { NavlinkGroup } from "./NavlinkGroup";
import { connect } from "react-redux";

const Navbar = ({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
  visibleNews,
}) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      boxSizing="border-box"
      width={{ xs: "100%", md: "90%" }}
      mx="auto"
      pl={4}
      pr={1.5}
      py={1.5}
      maxWidth={1400}
      borderRadius={100}
      sx={{
        position: "fixed",
        top: visibleNews ? (sm ? "36px" : "64px") : "24px",
        left: "50%",
        transform: "translateX(-50%)",
        transition: "all ease 0.3s",
        zIndex: 99,
        boxShadow:
          userHasScrolled && !isMenuVisible && "0 0 50px rgb(0, 0, 0, 0.7)",
        "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
          {
            bgcolor: userHasScrolled && !isMenuVisible && "rgb(0, 0, 0, 0.7)",
            backdropFilter: userHasScrolled && !isMenuVisible && "blur(4em)",
          },
      }}
    >
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <Box onClick={() => setIsMenuVisible(false)}>
          <Link
            path="/"
            component={<img src="/images/logo.png" height={48} alt="alto" />}
          />
        </Box>
        {md && <NavlinkGroup />}
        {md && (
          <Link
            path="/contact"
            component={
              <Button
                color="primary"
                size="medium"
                variant={!userHasScrolled ? "outlined" : "contained"}
              >
                Contact us
              </Button>
            }
          />
        )}
        {md || (
          <IconButton
            sx={{ color: "white.main" }}
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            {isMenuVisible ? <CloseOutlined /> : <Menu />}
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  visibleNews: state.popup.visibleNews,
});

export default connect(mapStateToProps)(Navbar);
