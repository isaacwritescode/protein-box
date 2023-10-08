import { Box, Grid, Stack, Typography } from "@mui/material";
import TEAM from "./constants";
import Header from "../../../components/Header";

const Team = () => {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header label="Team" title="Meet the minds that made it all possible" />
      <Grid container pt={8} spacing={4}>
        {TEAM.map(({ name, title, designation, desc, img }, idx) => {
          return (
            <Grid item xs={12} md={6} key={idx}>
              <Stack
                bgcolor="#ffffff05"
                spacing={2}
                alignItems="center"
                direction="row"
                borderRadius={2}
                p={3}
                border="1px solid #ffffff10"
              >
                <img src={img} width="64px" height="64px" alt="" />
                <Stack>
                  <Typography variant="body1" fontWeight={500}>
                    {name}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    color="secondary"
                  >
                    {designation}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {desc}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Team;
