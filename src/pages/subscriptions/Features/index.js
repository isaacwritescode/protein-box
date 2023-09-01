import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { cloneElement } from "react";
import Header from "../../../components/Header";
import FEATURES from "./constants";

export default function Features() {
  const theme = useTheme();
  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", lg: "100%" }} pt={12}>
    <Header
      label="Benefits"
      title="Nourish Your Body, Elevate Your Life: Protein Box Benefits"
    />
    <Box mt={8}>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={4} alignItems="center">
        {FEATURES.map(({ title, desc, icon }, idx) => {
          const accent = theme.palette.accent.main;
          icon = cloneElement(icon, {
            color: accent
          })
          return <Grid item xs={4} key={idx}>
            <Stack spacing={2} p={4} border={`1px solid #ffffff10`} borderRadius={3}>
              <Stack height={56} width={56} borderRadius={2} border={`1px solid ${accent}`} alignItems="center" justifyContent="center" bgcolor={accent + "10"}>
                {icon}
              </Stack>
              <Stack spacing={1}>
                <Typography variant="body1">{title}</Typography>
                <Typography variant="body2" color="secondary">{desc}</Typography>
              </Stack>
            </Stack>
          </Grid>
        })}
      </Grid>
    </Box>
  </Box>
}