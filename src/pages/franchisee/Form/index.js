import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Header from "../../../components/Header";

const INCLUSIVES = [
  "Business plan",
  "Training",
  "Site selection",
  "Grand Opening",
];

const Form = () => {
  return (
    <Box maxWidth={1000} width="90%" mt={24} mx="auto">
      <Header label="Start a franchise" title="Ready to start a Revolution?" />
      <Box
        bgcolor="#ffffff07"
        borderRadius={4}
        p={{ xs: 4, md: 8 }}
        mt={{ xs: 4, md: 8 }}
      >
        <Grid
          container
          columns={{ xs: 6, md: 12 }}
          alignItems="center"
          rowSpacing={4}
          columnSpacing={8}
        >
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Typography variant="h4">
                Fill out this form and we'll do an opertunity analysis of your
                store
              </Typography>
              <Typography variant="body2">Process includes</Typography>
              {INCLUSIVES.map((elem, idx) => {
                return (
                  <Stack
                    key={idx}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <CheckCircleOutlineRounded color="accent" />
                    <Typography variant="body1">{elem}</Typography>
                  </Stack>
                );
              })}
            </Stack>
            <Typography variant="h6" mt={2}>
              <Box component="span" color="accent.main" fontSize={32}>
              300-500
              </Box>{" "}
              ft required
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <form name="franchisee" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="event" />
              <Stack spacing={3} borderRadius={2} width="100%">
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="first-name"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
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
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    label="Mobile no."
                    name="mobile"
                    type="number"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    variant="outlined"
                    required
                  />
                </Stack>
                <TextField
                  label="Message (Optional)"
                  name="message"
                  rows={4}
                  variant="outlined"
                  multiline
                />
                <Button type="submit" variant="contained" size="large">
                  Send message
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
