import { Box, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";
import STEPS from "./constants"

export default function Steps() {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header
        label="Try it now"
        title="Get your protein box in 3 simple steps"
      />
      <Stack direction="row" mt={8} spacing={3}>
        {STEPS.map(({ title, desc, img }, idx) => {
          return (
            <Stack spacing={2} flex={1} position="relative">
              <Stack
                bgcolor="yellow"
                width={48}
                justifyContent="center"
                alignItems="center"
                borderRadius={100}
                position="absolute"
                sx={{
                  aspectRatio: "1/1",
                  top: -16,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography variant="h6" color="black">
                  {idx + 1}
                </Typography>
              </Stack>
              <Stack
                borderRadius={8}
                flex={1}
                p={4}
                bgcolor="grey.900"
                alignItems="center"
                justifyContent="center"
                sx={{ aspectRatio: "1/1" }}
              >
                <img src={img} width="100%" />
              </Stack>
              <Stack spacing={0.5}>
                <Typography variant="body1">{title}</Typography>
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
