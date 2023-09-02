import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import Header from "../../../components/Header";
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
        <Header
          label="Frequently asked questions"
          title="Let’s see what’s on your mind"
        />
        <Box data-sal="fade-up">
          <AccordionGroup expanded={expanded} handleChange={handleChange} />
        </Box>
      </Stack>
    </Box >
  </Box >
}

export default FAQ;