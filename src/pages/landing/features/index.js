import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { cloneElement } from "react";
import FEATURES from "./constants";

export default function Features() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  console.log(matches)

  return <Box maxWidth={1000} mx="auto" width={{ xs: "90%", lg: "100%" }}>
    <Stack spacing={12} py={12}>
      {FEATURES.map(({ label, title, desc, img, mobileImg, offerings }, idx) =>
        <Box key={idx}>
          <Stack direction={matches ? "column" : idx % 2 === 1 ? "row-reverse" : "row"} spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Stack alignItems="start" gap={1} flex={2}>
              <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">{label}</Typography>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="body1" fontWeight={500} color="secondary">{desc}</Typography>
            </Stack>
            <Stack flex={2}>
              <img src={matches ? mobileImg : img} alt={label} width="100%" />
            </Stack>
          </Stack>
          {offerings && <Grid container columns={{ xs: 4, sm: 8, md: 12 }} mt={8} spacing={2} alignItems="center">
            {offerings.map(({ icon, title, desc }, idx) => {
              const accent = theme.palette.accent.main;
              icon = cloneElement(icon, {
                color: accent
              })
              return <Grid item xs={4} key={idx}>
                <Stack position="relative" spacing={3} direction="row" bgcolor="#ffffff05" borderRadius={2} p={3} border="1px solid #ffffff10" alignItems="center">
                  <Stack sx={{ aspectRatio: "1/1", width: 64 }} borderRadius={2} border={`1px solid ${accent}`} alignItems="center" justifyContent="center" bgcolor={accent + "10"}>
                    {icon}
                  </Stack>
                  <Stack>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="body2" color="secondary">{desc}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            })}
          </Grid>}
        </Box>
      )
      }
    </Stack>
  </Box>
}