import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import Header from "../../../components/Header";
import { LOCATIONS } from "./constants";

const Locations = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box maxWidth={1000} width={{ xs: "90%", lg: "80%" }} py={8} m="auto">
      <Box>
        <Stack spacing={4}>
          <Header
            label="locations"
            title="Available in your favourite cities"
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            flexWrap="wrap"
            spacing={3}
          >
            {LOCATIONS.map(({ img, title, desc }, idx) => {
              return (
                <Stack key={idx} spacing={2} flex={1} data-sal="fade-up" data-sal-delay={idx * 100}>
                  <img width="100%" src={img} />
                  <Box>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {desc}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Locations;
