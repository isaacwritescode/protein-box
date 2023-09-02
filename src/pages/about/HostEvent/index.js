import { Box, Button, Grid, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../../components/Header";

export default function HostEvent() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
    <Header
      label="Host an event"
      title="Start a Protein Box Revolution!"
    />
    <Box mt={8} data-sal="fade-up">
      <Grid container columns={{ xs: 6, md: 12 }} spacing={8} alignItems="center">
        <Grid item xs={6}>
          <Typography variant={sm ? "h4" : "h5"} >
            This is a short title
          </Typography>
          <Typography variant="body1" fontWeight={500} color="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Stack
              spacing={4}
              borderRadius={2}
              width="100%"
            >
              <Stack direction="row" spacing={2}>
                <TextField
                  sx={{ width: "100%" }}
                  label="First Name"
                  name="first-name"
                  variant="outlined"
                  required
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Last Name"
                  name="last-name"
                  variant="outlined"
                  required
                />
              </Stack>
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                required
              />
              <TextField
                label="Message (Optional)"
                name="message"
                rows={4}
                variant="outlined"
                multiline
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "fit-content" }}
              >
                Send message
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box>
  </Box>
}