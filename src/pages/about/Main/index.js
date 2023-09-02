import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../../components/Header";

export default function Main() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
    <Header
      label="About us"
      title="Let’s tell you a little more about us"
    />
    <Box mt={4}>
      <img src="/images/banner-placeholder.png" width="100%" />
    </Box>
    <Box my={8}>
      <Grid container columns={{ xs: 6, md: 12 }} data-sal="fade-up" spacing={2}>
        <Grid item xs={6}>
          <Typography variant={sm ? "h3" : "h4"} >
            We’ve got a mission, we’re passionate on achieving
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" fontWeight={500} color="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Box>
}