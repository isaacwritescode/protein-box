import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { cloneElement } from "react";
import FEATURES from "./constants";

export default function Features() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);

  return (
    <Box maxWidth={1000} mx="auto" width={{ xs: "90%", lg: "100%" }}>
      <Stack spacing={12} py={12}>
        {FEATURES.map(
          (
            { label, title, desc, img, mobileImg, offerings, fullWidthImg },
            idx
          ) => (
            <Box key={idx}>
              <Stack
                data-sal="fade-up"
                direction={
                  matches ? "column" : idx % 2 === 1 ? "row-reverse" : "row"
                }
                spacing={{ xs: 3, md: 6 }}
                alignItems="center"
              >
                <Stack alignItems="start" gap={1} flex={2}>
                  <Typography
                    variant="body1"
                    textTransform="uppercase"
                    fontWeight={500}
                    color="accent.main"
                  >
                    {label}
                  </Typography>
                  <Typography variant="h3">{title}</Typography>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="secondary"
                  >
                    {desc}
                  </Typography>
                </Stack>
                <Stack flex={2}>
                  <img
                    src={matches ? mobileImg : img}
                    alt={label}
                    width="100%"
                  />
                </Stack>
              </Stack>
              {offerings && (
                <Grid
                  container
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  mt={8}
                  spacing={2}
                  alignItems="center"
                >
                  {offerings.map(
                    ({ icon, title1, title2, gradient, desc }, idx) => {
                      const accent = theme.palette.accent.main;
                      icon = cloneElement(icon, {
                        color: accent,
                      });
                      return (
                        <Grid
                          item
                          xs={4}
                          key={idx}
                          data-sal="fade-up"
                          data-sal-delay={idx * 100}
                        >
                          <Stack
                            position="relative"
                            spacing={1}
                            bgcolor="#ffffff05"
                            borderRadius={2}
                            p={3}
                            border="1px solid #ffffff10"
                            alignItems="center"
                          >
                            <Typography
                              variant="body2"
                              textTransform="uppercase"
                            >
                              {title1}
                            </Typography>
                            <Typography
                              variant="h5"
                              textTransform="uppercase"
                              sx={{
                                background: `linear-gradient(${gradient})`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              {title2}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="secondary"
                              textAlign="center"
                            >
                              {desc}
                            </Typography>
                          </Stack>
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              )}
              {fullWidthImg && (
                <img
                  data-sal="fade-up"
                  src={fullWidthImg}
                  width="100%"
                  alt={title}
                />
              )}
            </Box>
          )
        )}
      </Stack>
    </Box>
  );
}
