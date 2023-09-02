import { Masonry } from "@mui/lab";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
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
      <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Achievements</Typography>
      <Typography variant={sm ? "h2" : "h3"} >We're getting noticed!</Typography>
      <Typography variant="body1" fontWeight={500} color="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
    </Stack>
    <Box mt={4}>
      <Masonry columns={{ md: 2, xs: 1 }} spacing={2}>
        {ACHIEVEMENTS.map(({ img }, idx) => {
          return <img src={img} alt="img" />
        })}
      </Masonry>
    </Box>
  </Box>
}