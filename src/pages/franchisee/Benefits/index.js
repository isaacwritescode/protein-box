import { Box, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";
import BENEFITS from "./constants";

const Benefits = () => {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={6}>
      <Header label="Benefits" title="Why Protein Box Franchise" />
      <Stack direction="row" flexWrap="wrap" gap={3} mt={4}>
        {BENEFITS.map(({ label, title }, idx) => {
          return (
            <Stack
              flex={1}
              spacing={1}
              textAlign="center"
              p={4}
              borderRadius={4}
              bgcolor="grey.900"
            >
              <Typography
                variant="body2"
                textTransform="uppercase"
                fontWeight={500}
                color="accent.main"
              >
                {label}
              </Typography>
              <Typography variant="h5">{title}</Typography>
            </Stack>
          );
        })}
        f
      </Stack>
    </Box>
  );
};

export default Benefits;
