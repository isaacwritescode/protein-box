import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "../../../components/Link";

export default function Hero() {
  return (
    <Stack
      position="relative"
      height="100vh"
      width="100%"
      justifyContent="center"
      overflow="hidden"
    >
      <video
        id="videoBG"
        style={{
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -1
        }}
        autoPlay={true}
        loop
        muted
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <Stack
        data-sal="fade-up"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography textTransform="uppercase">We are</Typography>
        <Box>
          <img src="/images/logo.png" width="100%" />
        </Box>
        <Typography>Protein Perfection Delivered to Your Doorstep.</Typography>
        <Link
          path="/subscriptions"
          component={<Button variant="contained">Get yours now</Button>}
        />
      </Stack>
    </Stack>
  );
}
