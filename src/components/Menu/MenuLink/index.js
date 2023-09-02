import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "../../Link";

export const MenuLink = ({ path, color, children, setIsMenuVisible }) => {
  const { pathname } = useLocation();
  return <Box
    m="auto"
    onClick={() => setIsMenuVisible(false)}
  >
    <Link
      path={path}
      component={
        <Typography
          variant="h5"
          color={pathname !== path ? "grey.500" : "black.main"}
          textAlign="center"
          sx={{
            textTransform: "capitalize",
            py: 2,
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          {children.replace("-", " ")}
        </Typography>
      }
    />
  </Box>
};
