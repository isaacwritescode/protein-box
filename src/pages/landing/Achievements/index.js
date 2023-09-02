import { Masonry } from "@mui/lab";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import ACHIEVEMENTS from "./constants";

export default function Achievements() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", lg: "100%" }} pt={12}>
    <Stack alignItems={{
      xs: "start", md: "center"
    }}
      textAlign={{ xs: "start", md: "center" }}
      gap={1} flex={2}>
      <Header
        label="Achievements"
        title="We're getting noticed!"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </Stack>
    <Box mt={4}>
      <Masonry columns={{ md: 2, xs: 1 }} spacing={2}>
        {ACHIEVEMENTS.map(({ img }, idx) => {
          return <img src={img} alt="img" data-sal="fade-up" />
        })}
      </Masonry>
    </Box>
  </Box>
}