import { Box, Grid, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";
import { BENEFITS, OTHER_BENEFITS } from "./constants";

const Benefits = () => {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={6}>
      <Header label="Benefits" title="Why Protein Box Franchise" />
      <Stack direction="row" flexWrap="wrap" gap={3} mt={4}>
        {BENEFITS.map(({ label, title }, idx) => {
          return (
            <Stack
              flex={1}
              spacing={1}
              textAlign="center"
              p={4}
              borderRadius={4}
              bgcolor="grey.900"
            >
              <Typography
                variant="body2"
                textTransform="uppercase"
                fontWeight={500}
                color="accent.main"
              >
                {label}
              </Typography>
              <Typography variant="h5">{title}</Typography>
            </Stack>
          );
        })}
      </Stack>
      <Grid container spacing={8} mt={4} columns={{ xs: 6, sm: 12 }}>
        {OTHER_BENEFITS.map(({ icon, title }, idx) => {
          return (
            <Grid item xs={3} key={idx}>
              <Stack alignItems="center" spacing={2}>
                <Stack
                  sx={{ aspectRatio: "1/1" }}
                  borderRadius={10}
                  width={72}
                  bgcolor="accent.main"
                  alignItems="center"
                  justifyContent="center"
                >
                  {icon}
                </Stack>
                <Typography variant="body1">{title}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Benefits;
