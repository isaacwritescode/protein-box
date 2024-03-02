import { Box, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";
import STEPS from "./constants";

export default function Steps() {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header
        label="Try it now"
        title="Get your protein box in 4 simple steps"
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        mt={8}
        spacing={{ xs: 8, md: 3 }}
      >
        {STEPS.map(({ title, desc, img }, idx) => {
          return (
            <Stack spacing={3} flex={1} position="relative">
              <img src={img} width="100%" />
              <Stack spacing={0.5}>
                <Typography variant="body1">
                  {idx + 1 + ". " + title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}
