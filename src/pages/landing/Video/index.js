import { Box, Grid, Stack, Typography } from "@mui/material";

const VideoSection = () => {
  return (
    <Box bgcolor="#ffffff05" mt={8} py={{ xs: 8, md: 16 }}>
      <Box width={{ xs: "90%" }} maxWidth={1000} mx="auto">
        <Grid
          container
          columnSpacing={8}
          rowSpacing={4}
          columns={{ xs: 6, md: 12 }}
          alignItems="center"
        >
          <Grid item xs={5}>
            <Stack spacing={0.5}>
              <Typography variant="h3">A message from the Founder</Typography>
              <Typography variant="body1" color="text.secondary">
                Join Founder Utpal Ghosh as he shares the story behind this
                innovative venture, paving the way for a healthier and more
                vibrant lifestyle.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <iframe
              src="https://www.youtube.com/embed/78YO_mNN0NE?si=LXExEj62kO5moBPF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{
                borderRadius: 16,
                width: "100%",
                aspectRatio: "560/315",
              }}
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VideoSection;
