import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { AccordionGroup } from "./AccordionGroup";

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  return <Box
    maxWidth={1000}
    width={{ xs: "90%", lg: "80%" }}
    pt={16}
    m="auto"
  >
    <Box>
      <Stack spacing={4}>
        <Stack alignItems={{
          xs: "start", md: "center"
        }} gap={1} flex={2}>
          <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Frequently asked questions</Typography>
          <Typography variant={sm ? "h2" : "h3"} > Let’s see what’s on your mind</Typography>
        </Stack>
        <AccordionGroup expanded={expanded} handleChange={handleChange} />
      </Stack>
    </Box >
  </Box >
}

export default FAQ;