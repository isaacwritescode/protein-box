import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { cloneElement } from "react";
import Header from "../../../components/Header";
import FEATURES from "./constants";
import { Check, CheckCircle, CheckCircleOutlineRounded } from "@mui/icons-material";

export default function Features() {
  const theme = useTheme();
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", lg: "100%" }} pt={12}>
      <Header
        label="Benefits"
        title="Nourish Your Body, Elevate Your Life: Protein Box Benefits"
      />
      <Box mt={8}>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          spacing={4}
          alignItems="center"
        >
          {FEATURES.map(({ title, desc }, idx) => {
            const accent = theme.palette.accent.main;
            return (
              <Grid item xs={4} key={idx}>
                <Stack
                  data-sal="fade-up"
                  data-sal-delay={idx * 100}
                  spacing={2}
                  p={4}
                  border={`1px solid #ffffff10`}
                  borderRadius={3}
                  bgcolor="#ffffff05"
                >
                  {/* <Stack height={56} width={56} borderRadius={2} border={`1px solid ${accent}`} alignItems="center" justifyContent="center" bgcolor={accent + "10"}>
                {icon}
              </Stack> */}
                  <Stack spacing={1}>
                    <Stack
                      color={accent}
                      spacing={1}
                      direction="row"
                      alignItems="center"
                    >
                      <CheckCircleOutlineRounded />
                      <Typography variant="body1" textTransform="uppercase">
                        {title}
                      </Typography>
                    </Stack>
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
    </Box>
  );
}
