import { Box, Stack } from "@mui/material";
import SPONSORS from "./constants";

export default function Sponsors() {
  return <Stack width={{ xs: "90%", md: "100%" }} direction="row" alignItems="center" justifyContent="space-between" maxWidth={1000} mx="auto" gap={8} py={8} boxSizing="border-box" >
    {
      SPONSORS.map(({ title, icon }, idx) =>
        <Box>
          <img key={idx} src={icon} alt={title} width="100%" />
        </Box>
      )
    }
  </Stack>
}