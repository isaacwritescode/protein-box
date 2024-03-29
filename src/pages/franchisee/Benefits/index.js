import { Box, Grid, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";
import { FRANCHISEE_RESPONSIBILITIES, PB_RESPONSIBILITIES } from "./constants";

const Benefits = () => {
  return (
    <>
      <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={16}>
        <Header title="Roles & Responsibilities of Protein Box" />
        <Grid container spacing={8} mt={4} columns={{ xs: 8, sm: 12 }}>
          {PB_RESPONSIBILITIES.map(({ img, title }, idx) => {
            return (
              <Grid item xs={4} key={idx}>
                <Stack alignItems="center" spacing={2}>
                  <img src={img} alt={title} width={72} />
                  <Typography textAlign="center" variant="body1">
                    {title}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={24}>
        <Header title="Roles & Responsibilities of Franchisee" />
        <Grid container spacing={8} mt={4} columns={{ xs: 8, sm: 12 }}>
          {FRANCHISEE_RESPONSIBILITIES.map(({ img, title }, idx) => {
            return (
              <Grid item xs={4} key={idx}>
                <Stack alignItems="center" spacing={2}>
                  <img src={img} alt={title} width={72} />
                  <Typography textAlign="center" variant="body1">
                    {title}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Benefits;
