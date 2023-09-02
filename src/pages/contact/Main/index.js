import { Box, Button, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box width={{ xs: "90%", md: "80%" }} m="auto" py={12} maxWidth={1000}>
    <Stack spacing={1}>
      <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Contact</Typography>
      <Typography variant={sm ? "h2" : "h3"} >Get in touch</Typography>
    </Stack>
    <Box my={4} maxWidth={800}>
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
    </Box>
  </Box>
}

export default Contact;