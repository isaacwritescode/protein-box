import { Box, Stack, Tooltip } from "@mui/material";
import SPONSORS from "./constants";
import { useState } from "react";

export default function Sponsors() {
 
  return (
    <Stack width="100%" bgcolor="#1a1c1e">
      <Stack
        width={{ xs: "90%", lg: "100%" }}
        direction="row"
        alignItems="center"
        maxWidth={1000}
        mx="auto"
        gap={{ xs: 4, md: 8 }}
        py={8}
        boxSizing="border-box"
        flexWrap="wrap"
      >
        {SPONSORS.map(({ title, desc, icon }, idx) => (
          <Box
            key={idx}
            data-sal="fade-up"
            data-sal-delay={idx * 100}
            sx={{ cursor: "pointer" }}
          >
            <Tooltip
              title={desc}
            >
              <img src={icon} height={48} alt={title} width="100%" />
            </Tooltip>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
