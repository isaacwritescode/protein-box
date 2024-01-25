import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FEATURES from "./constants";
import Slideshow from "./Slideshow";

export default function Features() {
  return (
    <Box maxWidth={1000} mx="auto" width={{ xs: "90%", lg: "100%" }}>
      <Stack spacing={12} py={12}>
        <Box>
          <Stack
            data-sal="fade-up"
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 6 }}
            mb={4}
            alignItems="center"
          >
            <Stack alignItems="start" gap={1} flex={2}>
              <Typography
                variant="body1"
                textTransform="uppercase"
                fontWeight={500}
                color="accent.main"
              >
                {FEATURES[0].label}
              </Typography>
              <Typography variant="h3" fontWeight={500}>
                {FEATURES[0].title}
              </Typography>
              <Typography variant="body1" color="secondary">
                {FEATURES[0].desc}
              </Typography>
            </Stack>
            <Stack flex={2}>
              <img
                src={FEATURES[0].img}
                alt={"pb-product-image"}
                width="100%"
              />
            </Stack>
          </Stack>
          <img
            data-sal="fade-up"
            src={FEATURES[0].fullWidthImg}
            width="100%"
            alt={FEATURES[0].label}
          />
        </Box>
        <Stack
          data-sal="fade-up"
          direction={{ xs: "column", md: "row-reverse" }}
          spacing={{ xs: 3, md: 16 }}
          alignItems="center"
        >
          <Stack alignItems="start" gap={1} flex={2}>
            <Typography
              variant="body1"
              textTransform="uppercase"
              fontWeight={500}
              color="accent.main"
            >
              {FEATURES[1].label}
            </Typography>
            <Typography variant="h3" fontWeight={500}>
              {FEATURES[1].title}
            </Typography>
            <Typography variant="body1" color="secondary">
              {FEATURES[1].desc}
            </Typography>
          </Stack>
          <Stack flex={2}>
            <Slideshow />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
