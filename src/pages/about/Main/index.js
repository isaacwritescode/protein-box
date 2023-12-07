import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../../components/Header";

export default function Main() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header label="About us" title="Let’s tell you a little more about us" />
      <Box mt={4}>
      <video
        style={{
          borderRadius: 24,
          width: "100%"
        }}
        autoPlay={true}
        loop
        muted
        preload="metadata"
        playsinline
      >
        <source src="/videos/promo.mp4" type="video/mp4" />
      </video>
      </Box>
      <Box my={8}>
        <Grid
          container
          columns={{ xs: 6, md: 12 }}
          data-sal="fade-up"
          spacing={2}
        >
          <Grid item xs={6}>
            <Typography variant={sm ? "h3" : "h4"}>
              Think Health Think Protein Box
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight={500} color="secondary">
              Mission: Our mission is to make delicious and healthy meals
              accessible to health-conscious consumers. We aspire to motivate
              consumers and help them assess their food requirements, craft and
              curate their meals with expert guidance If you have the will ...
              we have the meal!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
