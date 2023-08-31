import { Masonry } from "@mui/lab";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Card } from "./card";
import { TESTIMONIALS } from "./constants";

const Testimonials = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box width="100%" py={12}>
      <Box
        width={{ xs: "90%", lg: "75%" }}
        m="auto"
        maxWidth={1000}
        overflow="hidden"
      >
        <Stack spacing={4}>
        <Stack alignItems={{
          xs: "start", md: "center"
        }} 
        textAlign={{xs: "start", md: "center"}}
        gap={1} flex={2}>
          <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Testimonials</Typography>
          <Typography variant={sm ? "h2" : "h3"} >Don’t just take our word for it,
see what our clients have to say</Typography>
        </Stack>
          <Box width="100%">
            <Masonry columns={{ xl: 3, md: 2, xs: 1 }} spacing={2}>
              {TESTIMONIALS.map(({ name, description, review, image }, idx) => (
                <Box
                  key={idx}
                  data-sal={
                    sm ? "fade-up" : idx % 2 ? "fade-up-left" : "fade-up-right"
                  }
                >
                  <Card
                    key={idx}
                    name={name}
                    description={description}
                    review={review}
                    image={image}
                  />
                </Box>
              ))}
            </Masonry>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Testimonials;