import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "../../../components/Link";

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
    <Stack data-sal="fade-up"
      textAlign="center" justifyContent="center" alignItems="center" gap={2}>
      <Typography textTransform="uppercase">We are</Typography>
      <Box>
        <img src="/images/logo.png" width="100%" />
      </Box>
      <Typography>
        Protein Perfection Delivered to Your Doorstep.
      </Typography>
      <Link
        path="/subscriptions"
        component={
          <Button variant="contained">Get yours now</Button>
        }
      />
    </Stack>
  </Stack>
}