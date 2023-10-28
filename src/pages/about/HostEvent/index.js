import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../../../components/Header";

export default function HostEvent() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header label="Host an event" title="Start a Protein Box Revolution!" />
      <Box my={8} data-sal="fade-up" maxWidth={800} mx="auto">
        <form name="event" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="events" />
          <Stack spacing={4} borderRadius={2} width="100%">
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
            >
              Send message
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
