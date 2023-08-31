import { Box, Button, Stack, Typography } from "@mui/material";

export default function Hero() {
  return <Stack
    justifyContent="center"
    style={{
      backgroundImage: "url('/images/hero-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}
  >
    <Stack textAlign="center" justifyContent="center" alignItems="center" gap={2}>
      <Typography textTransform="uppercase">We are</Typography>
      <Box>
        <img src="/images/logo.png" width="100%" />
      </Box>
      <Typography>
        Protein Perfection Delivered to Your Doorstep.
      </Typography>
      <Button variant="contained">Get yours now</Button>
    </Stack>
  </Stack>
}