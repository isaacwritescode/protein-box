import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FEATURES from "./constants";

export default function Features() {
  return <Box maxWidth={1000} mx="auto" >
    <Stack spacing={12} py={12}>
      {FEATURES.map(({ label, title, desc, img }, idx) =>
        <Box key={idx}>
          <Stack direction={idx % 2 === 1 ? "row-reverse" : "row"} spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Stack alignItems="start" gap={1} flex={2}>
              <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">{label}</Typography>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="body1" fontWeight={500} color="secondary">{desc}</Typography>
            </Stack>
            <Stack flex={2}>
              <img src={img} alt={label} width="100%" />
            </Stack>
          </Stack>
        </Box>
      )
      }
    </Stack>
  </Box>
}