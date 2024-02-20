import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Header from "../../../components/Header";
import { LOCATIONS } from "./constants";

const Locations = () => {
  return (
    <Box maxWidth={1000} width={{ xs: "90%", lg: "80%" }} py={8} m="auto">
      <Box>
        <Stack spacing={4}>
          <Header
            label="locations"
            title="Available in your favourite cities"
          />
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {LOCATIONS.map(({ img, title, desc }, idx) => {
              return (
                <Stack
                  key={idx}
                  spacing={2}
                  flex={1}
                  data-sal="fade-up"
                  data-sal-delay={idx * 100}
                  textAlign="center"
                >
                  <img
                    width="100%"
                    style={{ borderRadius: 8, aspectRatio: "2/1.5" }}
                    src={img}
                    alt={title}
                  />
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
