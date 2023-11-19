import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import TEAM from "./constants";
import Header from "../../../components/Header";
import { Masonry } from "@mui/lab";

const Team = () => {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header label="Team" title="Meet the minds that made it all possible" />
      <Box mt={4}>
        <Grid
          container
          alignItems="stretch"
          columns={{ xs: 4, sm: 8, md: 12 }}
          spacing={2}
        >
          {TEAM.map(({ name, title, designation, desc, img }, idx) => {
            return (
              <Grid item xs={4}>
                <Stack
                  data-sal="fade-up"
                  data-sal-delay={idx * 100}
                  bgcolor="#ffffff05"
                  spacing={1}
                  borderRadius={2}
                  p={3}
                  border="1px solid #ffffff10"
                  position="relative"
                  height="calc(100% - 48px)"
                >
                  <img
                    src={img}
                    width={80}
                    height={80}
                    alt=""
                    style={{
                      borderRadius: "100%",
                      aspectRatio: "1/1",
                    }}
                  />
                  <Stack pt={2}>
                    <Typography variant="h6" fontWeight={500}>
                      {name}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      color="secondary"
                    >
                      {designation}
                    </Typography>
                    <Box my={2}>
                      <Divider />
                    </Box>
                    <Typography variant="body1" color="secondary">
                      {desc}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Team;
