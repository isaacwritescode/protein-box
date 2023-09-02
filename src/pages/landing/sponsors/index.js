import { Box, Stack } from "@mui/material";
import SPONSORS from "./constants";

export default function Sponsors() {
  return <Stack width={{ xs: "90%", lg: "100%" }} direction="row" alignItems="center" justifyContent="space-between" maxWidth={1000} mx="auto" gap={{ xs: 4, md: 8, lg: 16 }} py={8} boxSizing="border-box" >
    {
      SPONSORS.map(({ title, icon }, idx) =>
        <Box key={idx} data-sal="fade-up" data-sal-delay={idx * 100}>
          <img src={icon} alt={title} width="100%" />
        </Box>
      )
    }
  </Stack>
}