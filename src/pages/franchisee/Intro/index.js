import { useTheme } from "@emotion/react";
import {
  Grid,
  Box,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  Divider,
} from "@mui/material";

const Intro = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box maxWidth={1000} m="auto" width={"90%"} pt={16}>
      <Grid
        container
        columns={{ xs: 5, md: 12 }}
        spacing={8}
        mt={{ md: 0 }}
        alignItems="center"
      >
        <Grid item xs={7}>
          <Stack spacing={2} alignItems="start">
            <Typography
              variant="body1"
              textTransform="uppercase"
              fontWeight={500}
              color="accent.main"
            >
              Franchisee
            </Typography>
            <Typography variant={sm ? "h2" : "h3"}>
              Joining India’s Fastest Growing Franchise Can Be Highly Profitable
            </Typography>
            <Stack direction="row" spacing={4} py={2}>
              <Stack spacing={0.5}>
                <Typography variant="h6">50,000+</Typography>
                <Typography variant="body2" color="text.secondary">
                  meals sold
                </Typography>
              </Stack>
              <Divider flexItem orientation="vertical" />
              <Stack spacing={0.5}>
                <Typography variant="h6">4.5/5</Typography>
                <Typography variant="body2" color="text.secondary">
                  Average rating
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained">Apply now</Button>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img src="/images/rectangular-placeholder.png" width="100%" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
