import { Box, Stack, Tooltip } from "@mui/material";
import SPONSORS from "./constants";

export default function Sponsors() {
  return (
    <Stack
      width={{ xs: "90%", lg: "100%" }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      maxWidth={1000}
      mx="auto"
      gap={{ xs: 4, md: 8 }}
      py={8}
      boxSizing="border-box"
      flexWrap="wrap"
    >
      {SPONSORS.map(({ title, desc, icon }, idx) => (
        <Box key={idx} data-sal="fade-up" data-sal-delay={idx * 100} sx={{cursor: "pointer"}}>
          <Tooltip title={desc}>
            <img src={icon} height={48} alt={title} width="100%" />
          </Tooltip>
        </Box>
      ))}
    </Stack>
  );
}
