import { Typography, Stack, } from "@mui/material";
import { Link } from "../../Link";
import { useLocation } from "react-router-dom";
import { NAVBAR_LINKS } from "../constants";

export const NavlinkGroup = () => {
  const { pathname } = useLocation();
  return <Stack direction="row" spacing={4}>
    {NAVBAR_LINKS.map(({ title, url, path }, idx) => (
      <Link
        key={idx}
        url={url}
        path={path}
        component={
          <Typography
            fontWeight={500}
            variant="body2"
            textTransform="capitalize"
            sx={{
              position: "relative",
              color:
                pathname === path || pathname.includes(path + "/")
                  ? "text.primary"
                  : "text.secondary",
              transition: "all ease 0.3s",
              "&:hover": {
                color: "text.primary",
              },
            }}
          >
            {title}
          </Typography>
        }
      />
    ))}
  </Stack>
}