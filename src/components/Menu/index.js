import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Link } from "../Link";
import { NAVBAR_LINKS } from "../Navbar/constants";
import { MenuLink } from "./MenuLink";

const Menu = ({ setIsMenuVisible }) => {
  const b1 = useMediaQuery("(max-width:1132px)");
  return (
    b1 && (
      <>
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            background: "#1A1C1E",
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 98,
            animation: "pop ease 0.3s",
          }}
        >
          <Stack m="auto" py={2} alignSelf="center">
            {NAVBAR_LINKS.map(({ title, path, color }, idx) => (
              <MenuLink
                key={idx}
                title={title}
                path={path}
                color={color}
                setIsMenuVisible={setIsMenuVisible}
              >
                {title}
              </MenuLink>
            ))}
          </Stack>
          <Box mb={4} width="90%" mx="auto">
            <Box
              onClick={() => setIsMenuVisible(false)}
            >
              <Link
                path="/contact"
                component={
                  <Button color="primary" size="medium" variant="contained" fullWidth>Contact us</Button>
                }
              />
            </Box>
          </Box>
        </Stack>
      </>
    )
  );
};


export default Menu;