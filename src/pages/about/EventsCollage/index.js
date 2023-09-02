import { Masonry } from "@mui/lab";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Location } from "iconsax-react";
import Header from "../../../components/Header";
import EVENTS from "./constants";

export default function EventsCollage() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
    <Header
      label="Events"
      title="Fueling Health at Every Occasion - Protein Box Events"
    />
    <Box mt={4}>
      <Masonry columns={{ md: 2, xs: 1 }} spacing={2}>
        {EVENTS.map(({ img, title, location }, idx) => {
          return <Stack data-sal="fade-up" data-sal-delay={idx * 100} spacing={2} key={idx}>
            <img src={img} alt="img" />
            <Typography variant={sm ? "h5" : "h6"} >
              {title}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box color="accent.main">
                <Location />
              </Box>
              <Typography variant={sm ? "body1" : "body2"} >
                {location}
              </Typography>
            </Stack>
          </Stack>
        })}
      </Masonry>
    </Box>
  </Box>
}